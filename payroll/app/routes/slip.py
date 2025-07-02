from fastapi import APIRouter, Response
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from io import BytesIO
import os

router = APIRouter()

@router.get("/slip/download", response_class=Response)
def download_slip():
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4

    # Logo
    logo_path = "app/static/logo.png"  # ganti dengan path file logo kamu
    if os.path.exists(logo_path):
        c.drawImage(logo_path, 40, height - 100, width=100, preserveAspectRatio=True, mask='auto')

    # Judul
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(width / 2, height - 50, "PAYROLL SLIP")
    c.setFont("Helvetica", 12)
    c.drawCentredString(width / 2, height - 70, "February 2025")

    # Informasi Pegawai
    y = height - 120
    c.setFont("Helvetica", 10)
    c.drawString(40, y, "Name: Aam Muamar")
    c.drawString(300, y, "Job Title: Operational & Delivery")

    y -= 15
    c.drawString(40, y, "Department: Operation")
    c.drawString(300, y, "Marital Status: TK0")

    y -= 15
    c.drawString(40, y, "NPWP: -")

    # Income
    y -= 40
    c.setFont("Helvetica-Bold", 11)
    c.drawString(40, y, "Income:")

    c.setFont("Helvetica", 10)
    y -= 15
    c.drawString(60, y, "Basic Salary: 3,723,000")

    y -= 15
    c.drawString(60, y, "Meal: 420,000")

    y -= 15
    c.drawString(60, y, "BPJS TK Company: 146,000")

    y -= 15
    c.drawString(60, y, "BPJS TK - JKK Company: 8,760")

    y -= 20
    c.setFont("Helvetica-Bold", 10)
    c.drawString(60, y, "Total Income (IDR): 4,297,760")

    # Deduction
    y -= 30
    c.setFont("Helvetica-Bold", 11)
    c.drawString(40, y, "Deduction:")

    c.setFont("Helvetica", 10)
    y -= 15
    c.drawString(60, y, "BPJS TK Company: 146,000")

    y -= 15
    c.drawString(60, y, "BPJS TK Employee: 73,000")

    y -= 15
    c.drawString(60, y, "BPJS TK - JKK Company: 8,760")

    y -= 15
    c.drawString(60, y, "BPJS KS Employee: 36,500")

    y -= 20
    c.setFont("Helvetica-Bold", 10)
    c.drawString(60, y, "Total Deduction (IDR): 264,260")

    # THP
    y -= 30
    c.setFont("Helvetica-Bold", 12)
    c.drawString(40, y, "Take Home Pay (IDR): 4,033,500")

    y -= 30
    c.setFont("Helvetica", 10)
    c.drawString(40, y, "Transfer to: BNI")
    c.drawString(40, y - 15, "A/C No: 1435960221")

    c.setFont("Helvetica-Bold", 12)
    c.drawString(40, y - 35, "Aam Muamar")

    # Footer
    c.setFont("Helvetica", 8)
    c.drawRightString(width - 40, 30, "CONFIDENTIAL")

    c.showPage()
    c.save()

    buffer.seek(0)
    return Response(content=buffer.getvalue(), media_type="application/pdf", headers={
        "Content-Disposition": "attachment; filename=slip_gaji.pdf"
    })
