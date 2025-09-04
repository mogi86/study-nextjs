export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            このサイトについて
          </h1>
          <p className="text-xl text-gray-600">
            Next.jsの学習用プロジェクトです
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 技術スタック
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js 14</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• React</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📚 学習項目
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• App Router</li>
              <li>• Server Components</li>
              <li>• API Routes</li>
              <li>• Dynamic Routing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎯 目標
            </h2>
            <p className="text-gray-600 leading-relaxed">
              このプロジェクトを通じて、Next.js 14の新機能やベストプラクティスを学び、
              モダンなWebアプリケーション開発のスキルを向上させることを目指しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}