import classNames from "classnames/bind";
import styles from "./curation.module.scss";

const cn = classNames.bind(styles);

const Curation = () => {
  // 한국어 주석: 카드 데이터를 배열로 정의해 렌더링
  const cards = [
    {
      title: "진정성",
      desc: "내 답변, 말투, 선택의 흐름을 세밀한 기준으로 함께 살펴봅니다. 단순 취향을 넘어 가치관과 공감 포인트까지 입체적으로 파악해, 처음부터 대화가 편한 사람만 선택해요.",
    },
    {
      title: "공감",
      desc: "음악과 취미 같은 표면적 취향은 물론, 깨어 있는 시간대와 주말 패턴, 대화 톤까지 고려합니다. 스펙이 아니라 생활이 맞는 사람과 자연스럽게 이어지도록 연결해드려요",
    },
    {
      title: "익명 기반",
      desc: "취향과 생각, 대화 습관이 자연스럽게 드러나도록 설계했습니다. 처음 보는 사람에게도 부담 없이, 그러나 깊이 있게 나를 보여줄 수 있어요.",
    },
    {
      title: "의미있는 연결",
      desc: "취향과 생각, 대화 습관이 자연스럽게 드러나도록 설계했습니다. 처음 보는 사람에게도 부담 없이, 그러나 깊이 있게 나를 보여줄 수 있어요.",
    },
  ];

  return (
    <section className={cn("container")}>
      <div className={cn("inner")}>
        <div className={cn("head")}>
          <h2 className={cn("title")}>외모만 보는 소개팅은 그만!</h2>
          <p className={cn("desc")}>
            짧은 프로필, 사진만으로는 <br />
            진짜 대화가 시작되기도 전에 서로를 판단하게 됩니다. <br />
            그래서 소람은...
          </p>
        </div>
        {/* 카드 4개: 배열 렌더링 */}
        <div className={cn("cards")}>
          {cards.map(({ title, desc }, idx) => {
            const isOdd = (idx + 1) % 2 === 1; // 1,3번째 카드
            return (
              <div
                className={cn("card-wrap", isOdd ? "is-odd" : "is-even")}
                key={title}
              >
                {/* 태블릿/데스크탑에서 짝수 카드(2,4)는 위쪽 패딩 노출 */}
                <div className={cn("paddingBox", "paddingBox--top")} />

                <article className={cn("card")}>
                  <h3 className={cn("card-title")}>{title}</h3>
                  <p className={cn("card-desc")}>{desc}</p>
                </article>

                {/* 태블릿/데스크탑에서 홀수 카드(1,3)는 아래쪽 패딩 노출 */}
                <div className={cn("paddingBox", "paddingBox--bottom")} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curation;
