from flask_restful import Resource, reqparse

quotes = [
    {
        'name': 'Quote 1'
    },
    {
        'name': 'Quote 2'
    }
]

class Quotes(Resource):
    def get(self):
        return {'quotes': quotes}