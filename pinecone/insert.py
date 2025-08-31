from openai import OpenAI
from pinecone import Pinecone

print("xxxxxxxxxxxx")
# --- Init ---
client = OpenAI(api_key="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")
pc = Pinecone(api_key="pcsk_4NY3rw_DAZFV1h1xv6wqqEp3KNx82Xrvz8EYnyHfr4Tp2h1wwmens39EfrayeghWJmaxo6")

index = pc.Index("payroll")  # nama index kamu
print("cccccccccccc")
# --- Teks yang mau disimpan ---
text = """
Endpoint: GET https://103.127.136.113:3000/employee/{name}
Deskripsi: Ambil data pegawai berdasarkan nama.
Parameter: - name: string (wajib) → nama pegawai yang dicari.
Contoh: GET https://103.127.136.113:3000/employee/ardiansyah
Response: { "employee": {
        "employee_id": 9,
        "fingerid": "000000015",
        "nip": "NSA102024",
        "name": "Ardiansyah ",
        "company_id": 1,
        "department_id": 3,
        "position_id": 3,
        "employeestatus_id": 1,
        "bank_id": 2,
        "bankaccountnumber": "1332483062",
        "bankaccountname": "Ardiansyah ",
        "username": "ardin",
        "password": "ea512ae4bd733a2392d45a264222f7c5",
        "email": "ardiansyah@sinarantarbintang.co.id",
        "hp": "",
        "joindate": "2024-09-03",
        "worklength": 0.67,
        "status": "Active",
        "jamsostek_id": 7,
        "no_bpjstk": "24215225095",
        "no_bpjsks": "3275031408880007",
        "ptkp": "K3",
        "taxtype": 2,
        "taxirregular": 2,
        "taxfinal": 2,
        "sex": "L",
        "pob": "Bekasi",
        "dob": "1988-08-14",
        "age": 36.75,
        "agama": "islam",
        "married": "Maried",
        "npwp": "-",
        "address": "Harapan Jaya, Kec Bekasi Utara, Kota Bekasi ",
        "idtype": "",
        "idnumber": null,
        "photo": null,
        "resigndate": null,
        "resigntype_id": 0,
        "resign_reason": "",
        "status_active": 1,
        "useradded": null,
        "dateadded": null,
        "useredited": "admin",
        "dateedited": "2025-01-25T08:36:19.000Z",
        "bank": {
            "bank_id": 2,
            "name": "BNI",
            "useradded": null,
            "dateadded": null,
            "useredited": null,
            "dateedited": null
        },
        "company": {
            "company_id": 1,
            "code": "SAB",
            "name": "CV Sinar Antar Bintang",
            "npwp": "",
            "address": "",
            "city": "",
            "zip": "",
            "telp": "",
            "fax": "",
            "email": null,
            "jenisusaha": "",
            "namapimpinan": "",
            "npwp_pimpinan": "",
            "kelurahan": "",
            "kecamatan": "",
            "klu": "",
            "logo": null,
            "logo2": null,
            "useradded": null,
            "dateadded": null,
            "useredited": "admin",
            "dateedited": "2023-04-01T09:12:14.000Z"
        },
        "department": {
            "department_id": 3,
            "name": "Purchasing",
            "code": null,
            "useradded": null,
            "dateadded": null,
            "useredited": null,
            "dateedited": null
        },
        "employeestatus": {
            "employeestatus_id": 1,
            "name": "PKWTT",
            "useradded": null,
            "dateadded": null,
            "useredited": null,
            "dateedited": null
        },
        "jamsostek": {
            "jamsostek_id": 7,
            "name": "BPJS TK & KS 2",
            "type": "RATE",
            "useradded": "admin",
            "dateadded": "2025-01-25T08:19:20.000Z",
            "useredited": null,
            "dateedited": null
        },
        "position": {
            "position_id": 3,
            "name": "General Manager",
            "useradded": null,
            "dateadded": null,
            "useredited": null,
            "dateedited": null
        },
        "resigntype": null,
        "vleave": {
            "leave_id": 4,
            "employee_id": 9,
            "nip": "NSA102024",
            "name": "Ardiansyah ",
            "position": "General Manager",
            "periode": 2025,
            "startdate": "2025-01-01",
            "enddate": "2025-12-31",
            "totalleave": 12,
            "takenleave": 6,
            "publicleave": 0,
            "availableleave": 6,
            "sick": 0,
            "permit": 0
        }
    } }
"""
print("bbbbbbbbbbbb")
# --- Generate Embedding (1024 dimensi) ---
embedding = client.embeddings.create(
    model="text-embedding-3-large",  # karena index kamu 1024
    input=text
)
print("nnnnnnnnnnnnn")
vector = embedding.data[0].embedding  # hasil berupa list angka float
print("mmmmmmmmmmmmm")
with open("vector.txt", "w") as f:
    f.write(",".join(map(str, vector)))
# --- Upsert ke Pinecone ---
# index.upsert([
#     {
#         "id": "get-employee-by-name",
#         "values": vector,     # ini dense value
#         "metadata": {
#             "text": text,     # simpan teks asli supaya gampang retrival
#             "category": "employee_api"
#         },
#         "namespace": "employee_api"
#     }
# ])
print("aaaaaaaaaaaaaaaaaa")
