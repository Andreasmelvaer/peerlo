#!/usr/bin/env python3
"""Generate Peerlo one-pager PDF with brand identity."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
import os

# ── Brand Colors ──
EVENING_FOREST = HexColor("#305043")
FOREST = HexColor("#388566")
PAPER = HexColor("#F5F3F0")
CHARCOAL = HexColor("#3F3F3F")
BRIGHT_FOREST = HexColor("#C1F7E1")
PASTEL_FOREST = HexColor("#BDE1D2")
WHITE = HexColor("#FFFFFF")
SKY = HexColor("#6CCBEC")

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT = os.path.join(PROJECT_ROOT, "Peerlo-One-Pager.pdf")

W, H = A4  # 595.28 x 841.89 points


def draw_rounded_rect(c, x, y, w, h, r, fill=None, stroke=None):
    """Draw a rounded rectangle."""
    p = c.beginPath()
    p.moveTo(x + r, y)
    p.lineTo(x + w - r, y)
    p.arcTo(x + w - r, y, x + w, y + r, 0, 90)
    p.lineTo(x + w, y + h - r)
    p.arcTo(x + w - r, y + h - r, x + w, y + h, 0, 90)
    p.lineTo(x + r, y + h)
    p.arcTo(x, y + h - r, x + r, y + h, 0, 90)
    p.lineTo(x, y + r)
    p.arcTo(x, y, x + r, y + r, 0, 90)
    p.close()
    if fill:
        c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
    c.drawPath(p, fill=1 if fill else 0, stroke=1 if stroke else 0)


def draw_circle(c, cx, cy, r, fill):
    c.setFillColor(fill)
    c.circle(cx, cy, r, fill=1, stroke=0)


def main():
    c = canvas.Canvas(OUTPUT, pagesize=A4)
    c.setTitle("Peerlo — One-Pager")
    c.setAuthor("Peerlo")

    margin = 20 * mm
    content_w = W - 2 * margin
    col_w = (content_w - 8 * mm) / 2  # Two columns with gap

    # ─── HEADER SECTION (dark green banner) ───
    header_h = 95 * mm
    header_y = H - header_h

    # Dark green header bg
    c.setFillColor(EVENING_FOREST)
    c.rect(0, header_y, W, header_h, fill=1, stroke=0)

    # Decorative circles
    c.saveState()
    c.setFillColor(HexColor("#388566"))
    c.setFillAlpha(0.15)
    c.circle(W - 40 * mm, H - 20 * mm, 60 * mm, fill=1, stroke=0)
    c.circle(30 * mm, H - 80 * mm, 35 * mm, fill=1, stroke=0)
    c.restoreState()

    # Logo bubble (SVG path approximation as circle + text)
    logo_path = os.path.join(PROJECT_ROOT, "public/images/logo-light.svg")
    if os.path.exists(logo_path):
        from reportlab.graphics import renderPDF
        from reportlab.graphics.shapes import Drawing, Group, Path
        from xml.etree import ElementTree
        tree = ElementTree.parse(logo_path)
        root = tree.getroot()
        ns = {"svg": "http://www.w3.org/2000/svg"}
        # Just use text for the logo instead of complex SVG parsing
        pass

    # Company name
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 38)
    c.drawString(margin, H - 40 * mm, "Peerlo")

    # BETA badge
    c.saveState()
    badge_x = margin + c.stringWidth("Peerlo", "Helvetica-Bold", 38) + 8
    badge_y = H - 40 * mm + 2
    c.setFillColor(FOREST)
    c.setFillAlpha(0.3)
    c.roundRect(badge_x, badge_y, 38, 16, 8, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFillColor(BRIGHT_FOREST)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(badge_x + 8, badge_y + 4.5, "BETA")
    c.restoreState()

    # Tagline
    c.setFillColor(PASTEL_FOREST)
    c.setFont("Helvetica", 16)
    c.drawString(margin, H - 52 * mm, "Peer support. Gjort tilgjengelig.")

    # Description
    c.setFillColor(HexColor("#FFFFFFCC"))
    c.setFont("Helvetica", 10)
    desc = "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer."
    c.drawString(margin, H - 64 * mm, desc)
    desc2 = "Anonymt, tilgjengelig og med mennesker som virkelig forstår."
    c.drawString(margin, H - 72 * mm, desc2)

    # Website + email
    c.setFillColor(BRIGHT_FOREST)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 86 * mm, "peerlo.no")
    c.setFillColor(PASTEL_FOREST)
    c.setFont("Helvetica", 9)
    c.drawString(margin + 55, H - 86 * mm, "  |  hei@peerlo.no")

    # ─── BODY CONTENT ───
    body_top = header_y - 12 * mm
    left_x = margin
    right_x = margin + col_w + 8 * mm

    # === LEFT COLUMN ===

    # PROBLEM section
    y = body_top
    c.setFillColor(FOREST)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(left_x, y, "PROBLEMET")

    y -= 7 * mm
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(left_x, y, "Altfor mange sliter i stillhet.")

    y -= 8 * mm
    c.setFont("Helvetica", 9)
    c.setFillColor(HexColor("#666666"))
    lines = [
        "Mange ansatte står i stress, ensomhet, familieproblemer",
        "eller søvnløse netter - uten at noen vet det.",
        "Og hjelpen kommer ofte først når det har gått for langt.",
    ]
    for line in lines:
        c.drawString(left_x, y, line)
        y -= 4 * mm

    # Stats boxes
    y -= 6 * mm
    stats = [
        ("1 av 4", "ansatte opplever\npsykiske plager"),
        ("60%", "snakker aldri med\nnoen om det"),
        ("27 d.", "gj.snitt sykefravær\nved psykiske lidelser"),
    ]
    stat_w = (col_w - 2 * 3 * mm) / 3
    for i, (num, label) in enumerate(stats):
        sx = left_x + i * (stat_w + 3 * mm)
        # Card bg
        draw_rounded_rect(c, sx, y - 18 * mm, stat_w, 22 * mm, 3 * mm, fill=HexColor("#EBF5F0"))
        # Number
        c.setFillColor(FOREST)
        c.setFont("Helvetica-Bold", 16)
        c.drawString(sx + 3 * mm, y - 2 * mm, num)
        # Label
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 6.5)
        for j, l in enumerate(label.split("\n")):
            c.drawString(sx + 3 * mm, y - 9 * mm - j * 3 * mm, l)

    y -= 30 * mm

    # SOLUTION section
    c.setFillColor(FOREST)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(left_x, y, "LØSNINGEN")

    y -= 7 * mm
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(left_x, y, "Peer support - gjort tilgjengelig")

    y -= 8 * mm
    c.setFont("Helvetica", 9)
    c.setFillColor(HexColor("#666666"))
    sol_lines = [
        "Peerlo kobler ansatte med sertifiserte peers som",
        "har relevant egenerfaring. Anonymt og trygt.",
    ]
    for line in sol_lines:
        c.drawString(left_x, y, line)
        y -= 4 * mm

    y -= 4 * mm
    # Feature bullets
    features = [
        ("Anonymt", FOREST),
        ("Tilgjengelig når som helst", SKY),
        ("Mennesker med egenerfaring", HexColor("#25609F")),
    ]
    for text, color in features:
        draw_circle(c, left_x + 3, y + 2, 3, color)
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 9)
        c.drawString(left_x + 10, y, text)
        y -= 5.5 * mm

    # === RIGHT COLUMN ===

    # HOW IT WORKS
    y = body_top
    c.setFillColor(FOREST)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(right_x, y, "SLIK FUNGERER DET")

    y -= 7 * mm
    steps = [
        ("1", "Velg hva du står i", "Beskriv kort hva du trenger støtte med. Alt er anonymt."),
        ("2", "Bli matchet med en peer", "Vi kobler deg med en sertifisert peer med relevant erfaring."),
        ("3", "Start en samtale", "Snakk trygt og fritt med noen som virkelig forstår."),
    ]
    for num, title, desc in steps:
        # Number circle
        draw_circle(c, right_x + 4 * mm, y - 1 * mm, 4 * mm, BRIGHT_FOREST)
        c.setFillColor(EVENING_FOREST)
        c.setFont("Helvetica-Bold", 11)
        c.drawCentredString(right_x + 4 * mm, y - 4, num)
        # Title
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(right_x + 12 * mm, y, title)
        # Desc
        c.setFillColor(HexColor("#666666"))
        c.setFont("Helvetica", 8)
        c.drawString(right_x + 12 * mm, y - 4.5 * mm, desc)
        y -= 14 * mm

    # FOR EMPLOYERS
    y -= 6 * mm
    c.setFillColor(FOREST)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(right_x, y, "FOR ARBEIDSGIVERE")

    y -= 7 * mm
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(right_x, y, "Støtt ansatte før det blir")

    y -= 5 * mm
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(FOREST)
    c.drawString(right_x, y, "sykmelding.")

    y -= 8 * mm
    employer_points = [
        ("Lavere sykefravær", "Tidlig støtte reduserer risikoen for langvarig fravær."),
        ("Sterkere kultur", "En arbeidsplass der mennesker blir sett og ivaretatt."),
        ("Innsikt for HR", "Anonymisert, aggregert data om hva ansatte står i."),
    ]
    for title, desc in employer_points:
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(right_x, y, title)
        y -= 4 * mm
        c.setFillColor(HexColor("#666666"))
        c.setFont("Helvetica", 8)
        c.drawString(right_x, y, desc)
        y -= 7 * mm

    # ─── FOOTER BAR ───
    footer_h = 18 * mm
    c.setFillColor(EVENING_FOREST)
    c.rect(0, 0, W, footer_h, fill=1, stroke=0)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin, 6.5 * mm, "Klar for å lære mer?")

    c.setFillColor(BRIGHT_FOREST)
    c.setFont("Helvetica", 9)
    c.drawString(margin + 120, 6.5 * mm, "Book en demo på peerlo.no  |  hei@peerlo.no")

    # Small tagline right
    c.setFillColor(PASTEL_FOREST)
    c.setFont("Helvetica", 7)
    c.drawRightString(W - margin, 6.5 * mm, "Your peer, right here.")

    c.save()
    print(f"Created: {OUTPUT}")


if __name__ == "__main__":
    main()
