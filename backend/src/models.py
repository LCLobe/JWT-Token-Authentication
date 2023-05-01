from flask_sqlalchemy import SQLAlchemy

# create the extension
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    
    def __repr__(self):
        return f'<User {self.username}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }