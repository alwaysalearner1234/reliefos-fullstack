from flask import Blueprint, jsonify, request
from models import get_all_reports, get_report, add_report

reports_bp = Blueprint('reports', __name__)

@reports_bp.route('', methods=['GET'])
def list_reports():
    return jsonify(get_all_reports()), 200

@reports_bp.route('', methods=['POST'])
def create_report():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid input"}), 400
    
    new_report = add_report(data)
    return jsonify(new_report), 201

@reports_bp.route('/<int:report_id>', methods=['GET'])
def get_single_report(report_id):
    report = get_report(report_id)
    if report:
        return jsonify(report), 200
    return jsonify({"error": "Report not found"}), 404
