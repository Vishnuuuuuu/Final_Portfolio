import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import sharp from 'sharp'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  
  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 })
  }

  try {
    const pdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(pdfBytes)
    const page = await pdfDoc.getPages()[0]
    const pngBytes = await page.exportAsPNG({ scale: 2 })

    const resizedImage = await sharp(pngBytes)
      .resize(600, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toBuffer()

    return new NextResponse(resizedImage, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error generating PDF preview:', error)
    return new NextResponse('Error generating PDF preview', { status: 500 })
  }
}

