import streamlit as st
import os 
import nltk
import json
import base64
import pandas as pd
import ast

os.environ["OPENAI_API_KEY"] = "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"

from langchain.document_loaders import PyPDFLoader
from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.document_loaders import UnstructuredPDFLoader
from langchain.chat_models import ChatOpenAI
from langchain.chains.question_answering import load_qa_chain   
from PIL import Image
from datetime import datetime
from tempfile import NamedTemporaryFile
import pypdfium2 as pdfium

st.subheader("Upload CV in PDF or image format")
uploaded_file = st.file_uploader("Upload PDF or Images", type=["pdf","png","jpg","jpeg"])

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

if uploaded_file:
    file_name, file_extension = os.path.splitext(uploaded_file.name)
    if file_extension != '.pdf':
        uploaded_image = Image.open(uploaded_file)
        st.image(uploaded_image,width=700)
        img = uploaded_image.convert('RGB')
        loader = UnstructuredPDFLoader(img)
        img.save(file_name+'.pdf')
        PDFFileName = file_name+'.pdf'
    else:
        with NamedTemporaryFile(delete=False, dir='.', suffix='.pdf') as f:
            f.write(uploaded_file.getbuffer())
            PDFFileName = f.name
            pdf = pdfium.PdfDocument(PDFFileName)
            n_pages = len(pdf)
            for page_number in range(n_pages):
                page = pdf.get_page(page_number)
                pil_image = page.render(scale=4).to_pil()
                st.image(pil_image,width=700)
            
    st.write("Document parsing in progress ...")
    loader = UnstructuredPDFLoader(PDFFileName)
    pages = loader.load_and_split()
    embeddings = OpenAIEmbeddings()
    docsearch = Chroma.from_documents(pages, embeddings).as_retriever()    
    
    current_date = datetime.now()
    query = "Output informatio, (all in English), from the document in JSON format: full name, contacts, age, languages, education, school, places of work, skills.If some fields cannot be filled from the document, then create this field and fill it with N/A. If the date of birth is not indicated, then please calculate the approximate age of the candidate based on the information provided in the document, for calculations, take into account that graduation from the university is usually at 22 years old. Current date = "+ current_date.date().strftime('%Y-%m-%d')
    docs = docsearch.get_relevant_documents(query)
    chain = load_qa_chain(ChatOpenAI(temperature=0), chain_type="stuff")
    output = chain.run(input_documents=docs, question=query)
    st.subheader("Parsing result in JSON format")
    valid_json = ast.literal_eval(output)
    st.json(valid_json)
    
    json_data = json.loads(json.dumps(valid_json))

    names = [json_data.get("full_name", "N/A")]
    contacts = [json_data.get("contacts", "N/A")]
    ages = [json_data.get("age", "N/A")]
    languages = [json_data.get("languages", "N/A")]
    education = [json_data.get("education", "N/A")]
    school = [json_data.get("school", "N/A")]
    works = [json_data.get("places_of_work", "N/A")]
    skills = [json_data.get("skills", "N/A")]

    df = pd.DataFrame({
        "name": names,
        "contacts": contacts,
        "age": ages,
        "languages": languages,
        "education": education,
        "school": school,
        "work": works,
        "skill": skills
    })    
    st.subheader("Parsing result as a table")
    st.table(df)
    csv = df.to_csv(index=False).encode('utf-8')
    download1 = st.download_button(label="Download result as CSV",data=csv,file_name='result_df.csv',mime='text/csv')
    st.write("Done...")
