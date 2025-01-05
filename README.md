This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- create .env.local file and set TWITTER_BEARER_TOKEN to use twitter api

```bash
TWITTER_BEARER_TOKEN=your_bearer_token
```

- First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy

- docker build

```bash
docker build -t next-app .
```

- get repository uri

```bash
aws ecr describe-repositories --query 'repositories[?contains(repositoryName, `next-app`)].repositoryUri' --output text
# 出力例: 123456789012.dkr.ecr.ap-northeast-1.amazonaws.com/next-app
```

- login to ecr

```bash
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query 'Account' --output text).dkr.ecr.ap-northeast-1.amazonaws.com
```

- tag image

```bash
# 環境変数にECRのURIを設定
ECR_URI=$(aws ecr describe-repositories --query 'repositories[?contains(repositoryName, `next-app`)].repositoryUri' --output text)

# タグ付け
docker tag next-app:latest ${ECR_URI}:latest
```

- push image

```bash
docker push ${ECR_URI}:latest
```
