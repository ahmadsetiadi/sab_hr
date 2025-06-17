from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_payrolls():
    # First login to get token
    login = client.post("/login", json={"username": "admin", "password": "admin"})
    token = login.json()["access_token"]

    response = client.get("/payrolls", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200