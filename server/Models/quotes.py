from server import db
from sqlalchemy.dialects.postgresql import JSON


class Quote(db.Model):
    # Defining tables
    id = db.Column(db.Integer, primary_key=True)
    job_name = db.Column(db.String(255), nullable=False)
    
    def __init__(**kwargs):
        super(Quote, self).__init__(**kwargs)
        # Custom Stuff

    def __repr__(self):
        return '<Quote %r>' % self.job_name