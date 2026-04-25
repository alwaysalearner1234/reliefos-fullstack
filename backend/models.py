# backend/models.py

import json

# In-memory storage for reports
# Format: { "id": number, "type": string, "location": string, "severity": string, "status": string }
_reports = [
    {
        "id": 1,
        "type": "Flood",
        "location": "Miami, FL",
        "severity": "High",
        "status": "Active",
        "timestamp": "10 mins ago"
    },
    {
        "id": 2,
        "type": "Earthquake",
        "location": "San Francisco, CA",
        "severity": "Medium",
        "status": "Active",
        "timestamp": "25 mins ago"
    },
    {
        "id": 3,
        "type": "Fire",
        "location": "Los Angeles, CA",
        "severity": "Low",
        "status": "Resolved",
        "timestamp": "1 hour ago"
    }
]

_next_id = 4

def get_all_reports():
    return _reports

def get_report(report_id):
    for report in _reports:
        if report["id"] == report_id:
            return report
    return None

def add_report(report_data):
    global _next_id
    new_report = {
        "id": _next_id,
        "type": report_data.get("type", "Unknown"),
        "location": report_data.get("location", "Unknown"),
        "severity": report_data.get("severity", "Medium"),
        "status": report_data.get("status", "Active"),
        "timestamp": report_data.get("timestamp", "Just now")
    }
    _reports.append(new_report)
    _next_id += 1
    return new_report

def get_stats():
    active_crises = sum(1 for r in _reports if r["status"] == "Active")
    resolved_crises = sum(1 for r in _reports if r["status"] == "Resolved")
    high_severity = sum(1 for r in _reports if r["severity"] == "High")
    
    return {
        "active_crises": active_crises,
        "resolved_crises": resolved_crises,
        "high_severity": high_severity,
        "total_reports": len(_reports)
    }
