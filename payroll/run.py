import uvicorn

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="192.168.1.17", port=8000, reload=True)

# =======================================================================
# # app.py
# from http.server import BaseHTTPRequestHandler, HTTPServer

# class SimpleApp(BaseHTTPRequestHandler):
#     def do_GET(self):
#         self.send_response(200)
#         self.send_header("Content-type", "text/html")
#         self.end_headers()
#         self.wfile.write(b"<h1>Hello, Python tanpa pip install!</h1>")

# if __name__ == "__main__":
#     server_address = ("", 8000)  # Port 8000
#     httpd = HTTPServer(server_address, SimpleApp)
#     print("Server berjalan di http://localhost:8000")
#     httpd.serve_forever()
