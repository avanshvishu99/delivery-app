#!/bin/bash

# === Step 1: Generate SSH Key ===
echo "🔐 Generating SSH key..."
ssh-keygen -t ed25519 -C "avanshvishu99@github.com" -f ~/.ssh/id_ed25519 -N ""

# === Step 2: Start SSH Agent ===
echo "🚀 Starting ssh-agent..."
eval "$(ssh-agent -s)"

# === Step 3: Add SSH Key to Agent ===
echo "➕ Adding SSH key to agent..."
ssh-add ~/.ssh/id_ed25519

# === Step 4: Show Public Key ===
echo ""
echo "📋 Copy the following SSH public key and add it to your GitHub account:"
echo "🔗 GitHub: https://github.com/settings/ssh/new"
echo ""
cat ~/.ssh/id_ed25519.pub
echo ""
echo "✅ Done! SSH key created and added to agent."
