#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB_DIR="${ROOT_DIR}/web"

if [[ ! -d "${WEB_DIR}" ]]; then
  echo "未找到 web/ 目录：${WEB_DIR}" >&2
  exit 1
fi

cd "${WEB_DIR}"

if [[ -f "${ROOT_DIR}/proxy.env" ]]; then
  # 可选：在 proxy.env 里写 HTTP_PROXY/HTTPS_PROXY/ALL_PROXY/NO_PROXY
  set -a
  # shellcheck disable=SC1091
  source "${ROOT_DIR}/proxy.env"
  set +a
fi

if [[ ! -d node_modules ]]; then
  echo "[1/3] 安装依赖 npm install ..."
  npm install --no-audit --no-fund
fi

echo "[2/3] 同步内容到 web/public/content ..."
npm run sync-content

echo "[3/3] 启动开发服务器 ..."
exec npm run dev -- --host 0.0.0.0 --port 5173

