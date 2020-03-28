from flask import Flask, render_template
from flask_restful import Api, Resource
from flask_cors import CORS
import random
import math
import numpy as np

app = Flask(__name__,static_url_path="" ,template_folder='./dist')
CORS(app)
api = Api(app)

class Dna(Resource):
    dna_seed=[0,1,2,3]
    prob=[0.22,0.28,0.22,0.28]
    stt=[2,0,3]
    stps=[[0,2,2],[0,2,3],[0,3,2]]
    life=20
    def get(self):
        return {'seq':self.generate()}
    def generate(self) :
        read=math.floor(self.life / 3)
        codon=read-2
        vast=math.floor(self.life / 4)
        dash=random.randint(0,vast)
        undash=vast-dash
        start=self.dnas(dash)
        stop=self.stps[random.randint(1,len(self.stps))-1]
        before=np.concatenate([start,self.stt], axis=0)
        after=np.concatenate([stop,self.dnas(undash)], axis=0)
        return np.concatenate([before,self.dnas(codon*3),after], axis=0).tolist()
    def dnas(self,count=100) :
        return np.random.choice(self.dna_seed,count,self.prob)

api.add_resource(Dna, '/dna')

if __name__ == '__main__':
    app.run(host="0.0.0.1", port=5000,debug=True)