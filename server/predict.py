import pickle
import pandas as pd
import json
import sys
from sklearn.feature_extraction.text import CountVectorizer

with open('feedback_model.pkl', 'rb') as f:
    model,vectorizer2 = pickle.load(f)

#json_data = sys.stdin.read()

json_data = open('data.json')
data = json.load(json_data)
text_to_predict_vec = vectorizer2.transform([data['message']])
print(model.predict(text_to_predict_vec))
print(data)