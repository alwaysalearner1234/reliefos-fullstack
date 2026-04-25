from flask import Blueprint, jsonify
from models import get_stats

stats_bp = Blueprint('stats', __name__)

@stats_bp.route('', methods=['GET'])
def get_statistics():
    stats = get_stats()
    return jsonify(stats), 200
