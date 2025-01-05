# ビルドステージ
FROM node:20.18.0-alpine AS builder
WORKDIR /app

# yarnのインストール
RUN corepack enable

# 依存関係のインストールを分離してキャッシュを活用
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ソースコードのコピーとビルド
COPY . .
RUN yarn build

# 実行ステージ
FROM node:20.18.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# yarnのインストール
RUN corepack enable

# 本番環境の依存関係のみをコピー
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# ビルド成果物のコピー
COPY --from=builder /app/.next ./.next

# セキュリティ強化：非rootユーザーの作成と権限設定
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]