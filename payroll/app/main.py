from fastapi import FastAPI
from app.database import Base, engine
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, payroll, slip, attendances
from app.models import user, payroll as payroll_model

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

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
app.include_router(attendances.router)



# import threading
# import subprocess
# import time
# import socket
# import re
# from librouteros import connect

# api = connect(username='sab', password='Sinabi#2024', host='10.147.17.152')
# clients = api.path('ip', 'dhcp-server', 'lease')

# for client in clients:
#     print(f"IP: {client.get('address')}, MAC: {client.get('mac-address')}, Hostname: {client.get('host-name')}")

# # result = subprocess.check_output(["arp", "-a"], universal_newlines=True)
# # devices = []
# # for line in result.splitlines():
# #     print(line)
#     # match = re.match(r'\? \(([\d\.]+)\) at ([\w:]+)', line)
#     # if match:
#     #     ip = match.group(1)
#     #     mac = match.group(2)
#     #     print(f"IP: {ip} | Nama: {mac}")

# def scan_devices():
#     while True:
#         print("\n[SCAN] Mendeteksi perangkat di jaringan...")
#         try:
#             # Jalankan perintah 'arp -a' (Windows, Linux dan macOS)
#             result = subprocess.check_output(['arp', '-a'], stderr=subprocess.STDOUT, universal_newlines=True)
#             lines = result.splitlines()

#             for line in lines:
#                 if '-' in line or 'interface' in line.lower():
#                     continue

#                 parts = line.split()
#                 if len(parts) >= 1:
#                     ip = parts[0]
#                     try:
#                         hostname = socket.gethostbyaddr(ip)[0]
#                     except Exception:
#                         hostname = "Tidak diketahui"
#                     print(f"IP: {ip} | Nama: {hostname}")
#         except Exception as e:
#             print(f"Error saat scan: {e}")

#         time.sleep(1)  # scan tiap 1 detik

# # Jalankan di thread terpisah agar tidak blok FastAPI
# # threading.Thread(target=scan_devices, daemon=True).start()