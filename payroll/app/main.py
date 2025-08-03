from fastapi import FastAPI
from app.routes import auth, payroll, slip
from app.database import Base, engine
from app.models import user, payroll as payroll_model
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Daftar origin yang diperbolehkan
# origins = [
#     "http://localhost:4200",  # frontend Angular saat dev
#     "http://127.0.0.1:4200",
#     # tambahkan origin lain jika perlu, misalnya domain production
# ]
origins = ["*"]

# Tambahkan middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # atau ["*"] untuk semua origin
    allow_credentials=True,
    allow_methods=["*"],              # izinkan semua method: GET, POST, dll
    allow_headers=["*"],              # izinkan semua header
)

app.include_router(auth.router)
app.include_router(payroll.router)
app.include_router(slip.router)



import threading
import subprocess
import time
import socket
import re
from librouteros import connect

api = connect(username='sab', password='Sinabi#2024', host='10.147.17.152')
clients = api.path('ip', 'dhcp-server', 'lease')

for client in clients:
    print(f"IP: {client.get('address')}, MAC: {client.get('mac-address')}, Hostname: {client.get('host-name')}")

# result = subprocess.check_output(["arp", "-a"], universal_newlines=True)
# devices = []
# for line in result.splitlines():
#     print(line)
    # match = re.match(r'\? \(([\d\.]+)\) at ([\w:]+)', line)
    # if match:
    #     ip = match.group(1)
    #     mac = match.group(2)
    #     print(f"IP: {ip} | Nama: {mac}")

def scan_devices():
    while True:
        print("\n[SCAN] Mendeteksi perangkat di jaringan...")
        try:
            # Jalankan perintah 'arp -a' (Windows, Linux dan macOS)
            result = subprocess.check_output(['arp', '-a'], stderr=subprocess.STDOUT, universal_newlines=True)
            lines = result.splitlines()

            for line in lines:
                if '-' in line or 'interface' in line.lower():
                    continue

                parts = line.split()
                if len(parts) >= 1:
                    ip = parts[0]
                    try:
                        hostname = socket.gethostbyaddr(ip)[0]
                    except Exception:
                        hostname = "Tidak diketahui"
                    print(f"IP: {ip} | Nama: {hostname}")
        except Exception as e:
            print(f"Error saat scan: {e}")

        time.sleep(1)  # scan tiap 1 detik

# Jalankan di thread terpisah agar tidak blok FastAPI
# threading.Thread(target=scan_devices, daemon=True).start()