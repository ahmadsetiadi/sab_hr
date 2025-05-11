# app.py

from flask import Flask
from routes.payroll import payroll_bp

app = Flask(__name__)

# Register blueprint
app.register_blueprint(payroll_bp)

if __name__ == '__main__':
    app.run(debug=True)
