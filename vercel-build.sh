#!/bin/bash
echo "Building Vite app..."
vite build

echo "Creating Vercel Build Output API v3 structure..."
rm -rf .vercel/output
mkdir -p .vercel/output/static

echo "Copying dist to Vercel static output..."
cp -a dist/. .vercel/output/static/

echo "Creating Vercel routing configuration..."
cat << 'EOF' > .vercel/output/config.json
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF

echo "Vercel Build Output API structure created successfully."
