# app/session_store.py
import uuid
import json
import redis
from app.config import settings

# Inisialisasi koneksi Redis
redis_client = redis.Redis(
    host=settings.REDIS_HOST,
    port=settings.REDIS_PORT,
    db=0,
    decode_responses=True
)

SESSION_EXPIRE_SECONDS = 60 * 60  # 1 jam

def create_session(id_user, id_usergroup, username):
    session_id = str(uuid.uuid4())
    session_data = {"id_user": id_user, "id_usergroup": id_usergroup, "username": username}
    redis_client.setex(session_id, SESSION_EXPIRE_SECONDS, json.dumps(session_data))
    return session_id, session_data

def get_session(session_id):
    data = redis_client.get(session_id)
    if data:
        return json.loads(data)
    return None
