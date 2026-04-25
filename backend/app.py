from flask import Flask
from flask_cors import CORS
from routes.reports import reports_bp
from routes.stats import stats_bp

app = Flask(__name__)
# Enable CORS for all routes, allowing frontend to access the API
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Register Blueprints
app.register_blueprint(reports_bp, url_prefix='/api/reports')
app.register_blueprint(stats_bp, url_prefix='/api/stats')

@app.route('/')
def index():
    return "ReliefOS API is running."

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
