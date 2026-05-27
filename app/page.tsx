import Image from "next/image";

const features = [
  {
    title: "桌面即学",
    text: "单词以轻量浮窗停在桌面边缘，不打断写代码、看文档或刷题的节奏。",
  },
  {
    title: "记忆节拍",
    text: "按熟悉度安排复现频率，高频错词会更常出现，已经掌握的词自动退场。",
  },
  {
    title: "语境提示",
    text: "每个词配一句短句和中文释义，避免只背拼写却忘了怎么用。",
  },
];

const stats = [
  { value: "7s", label: "一次微复习" },
  { value: "0", label: "切换成本" },
  { value: "2", label: "平台下载" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff6ef] text-[#24130c]">
      <main className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -left-48 -top-64 h-136 w-136 rounded-full bg-[#ffb177]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-72 bottom-72 h-144 w-xl rounded-full bg-[#f36f4f]/25 blur-3xl" />

        <nav className="relative z-10 flex items-center justify-between rounded-full border border-white/70 bg-white/60 px-4 py-3 shadow-[0_20px_80px_rgba(127,61,29,0.12)] backdrop-blur-xl">
          <a href="#" className="flex items-center gap-3" aria-label="桌面单词首页">
            <Image
              src="/icon.png"
              alt="桌面单词图标"
              width={44}
              height={44}
              priority
              className="rounded-2xl shadow-[0_10px_24px_rgba(241,111,79,0.28)]"
            />
            <span className="text-lg font-semibold tracking-tight">桌面单词</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#6f4634] md:flex">
            <a className="transition hover:text-[#ef6f4f]" href="#features">
              功能
            </a>
            <a className="transition hover:text-[#ef6f4f]" href="#download">
              下载
            </a>
            <a className="transition hover:text-[#ef6f4f]" href="#workflow">
              工作流
            </a>
          </div>
          <a
            href="#download"
            className="rounded-full bg-[#24130c] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(36,19,12,0.2)] transition hover:-translate-y-0.5 hover:bg-[#3b1f13]"
          >
            立即下载
          </a>
        </nav>

        <section className="relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c2a4] bg-white/70 px-4 py-2 text-sm font-semibold text-[#bf5a38] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f36f4f]" />
              把背单词放回你的桌面
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#24130c] sm:text-6xl lg:text-7xl">
              每次抬眼，
              <span className="block text-[#ef704e]">都多记住一个词。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6f4634] sm:text-xl">
              桌面单词是一款常驻桌面的英语记忆工具。它用轻量浮窗、短句语境和错词复现，把碎片时间变成稳定的词汇增长。
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/downloads/desktop-words-mac.dmg"
                download
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#ef704e] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(239,112,78,0.35)] transition hover:-translate-y-1 hover:bg-[#e45f40]"
              >
                下载 macOS 版
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/downloads/desktop-words-windows.exe"
                download
                className="flex items-center justify-center rounded-2xl border border-[#f0b591] bg-white/70 px-6 py-4 text-base font-semibold text-[#24130c] shadow-[0_16px_34px_rgba(127,61,29,0.12)] transition hover:-translate-y-1 hover:border-[#ef704e] hover:bg-white"
              >
                下载 Windows 版
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/80 bg-white/55 p-4 shadow-[0_14px_34px_rgba(127,61,29,0.08)] backdrop-blur"
                >
                  <div className="text-2xl font-semibold tracking-tight text-[#ef704e]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#7a5242]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-[3rem] bg-[#f36f4f]/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_90px_rgba(127,61,29,0.22)] backdrop-blur-2xl">
              <div className="rounded-4xl bg-[#21120d] p-4 text-white shadow-inner">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff775e]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd78]" />
                    <span className="h-3 w-3 rounded-full bg-[#fff1df]" />
                  </div>
                  <span className="text-xs font-medium text-white/45">Desk Mode</span>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-[#fff5ec] p-5 text-[#24130c]">
                  <div className="absolute right-4 top-4 rounded-full bg-[#ef704e]/10 px-3 py-1 text-xs font-semibold text-[#ef704e]">
                    今日第 18 个
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/icon.png"
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-3xl"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#bf5a38]">正在复习</p>
                      <h2 className="mt-1 text-4xl font-semibold tracking-[-0.04em]">
                        wander
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[#6f4634]">
                    to walk slowly around without a clear direction
                  </p>
                  <p className="mt-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#7a5242]">
                    例句：I like to wander through the city after work.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["认识", "模糊", "忘了"].map((item) => (
                    <button
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/15"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative z-10 py-10 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ef704e]">
                Features
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                不抢注意力，只在你刚好能记住的时候出现。
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6f4634]">
              它不是又一个需要打开的学习 App，而是桌面上的小提示器。看见、判断、继续工作。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-4xl border border-white/80 bg-white/65 p-6 shadow-[0_18px_48px_rgba(127,61,29,0.1)] backdrop-blur"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ef704e] text-lg font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#6f4634]">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="relative z-10 my-10 grid gap-6 rounded-[2.5rem] bg-[#24130c] p-6 text-white shadow-[0_28px_80px_rgba(36,19,12,0.24)] md:grid-cols-[0.8fr_1.2fr] md:p-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb177]">
              Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              三步，把词汇塞进日常。
            </h2>
          </div>
          <div className="grid gap-3">
            {["导入词库或错词本", "设置浮窗位置和出现频率", "用认识、模糊、忘了完成复习闭环"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/8 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#24130c]">
                    {index + 1}
                  </span>
                  <p className="text-base font-medium text-white/85">{step}</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section
          id="download"
          className="relative z-10 py-12 sm:py-18"
          aria-labelledby="download-title"
        >
          <div className="rounded-[2.5rem] border border-[#f0b591] bg-[#fffaf5] p-6 shadow-[0_24px_70px_rgba(127,61,29,0.12)] sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <Image
                src="/icon.png"
                alt=""
                width={84}
                height={84}
                className="mx-auto rounded-[1.75rem] shadow-[0_16px_36px_rgba(241,111,79,0.3)]"
              />
              <h2
                id="download-title"
                className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                现在下载桌面单词
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6f4634]">
                支持 Windows 和 macOS。把安装包放入 `public/downloads` 后，下面的按钮会直接下载对应版本。
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="/downloads/desktop-words-windows.exe"
                download
                className="group rounded-4xl border border-[#f0b591] bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[#ef704e] hover:shadow-[0_18px_44px_rgba(127,61,29,0.16)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef704e]">
                  Windows
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  下载 .exe 安装包
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6f4634]">
                  适用于 Windows 10 及以上版本，安装后可设置开机启动。
                </p>
                <span className="mt-6 inline-flex font-semibold text-[#24130c] transition group-hover:text-[#ef704e]">
                  获取 Windows 版 →
                </span>
              </a>

              <a
                href="/downloads/desktop-words-mac.dmg"
                download
                className="group rounded-4xl border border-[#f0b591] bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[#ef704e] hover:shadow-[0_18px_44px_rgba(127,61,29,0.16)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef704e]">
                  macOS
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  下载 .dmg 安装包
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6f4634]">
                  适用于 Apple Silicon 与 Intel Mac，拖入应用程序即可使用。
                </p>
                <span className="mt-6 inline-flex font-semibold text-[#24130c] transition group-hover:text-[#ef704e]">
                  获取 macOS 版 →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
