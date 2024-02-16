import { atom } from "recoil";

const dogsTalk = [
  {
    talk: "강아지는 자기 자신을 사랑하는 것보다 지구 상에서 유일하게 당신을 더 사랑합니다.",
    author: "Josh Billings"
  },
  {
    talk: "강아지들은 현명합니다. 상처가 나면 조용한 구석에서 핥고 완치가 될 때까지 세상 밖으로 나오지 않습니다.",
    author: "Agatha Christie"
  },
  {
    talk: "모든 사람이 강아지만큼 무조건 사랑하는 능력이 있다면 이 세상은 더 좋은 곳이 될 것입니다.",
    author: "M.K Clinton"
  },
  {
    talk: "왜 강아지를 보면 행복감을 느낄까요??",
    author: "Jonathan Safran Foer"
  },
  {
    talk: "천국에 강아지가 없다면 나는 죽어서 그들이 있는 곳으로 가고 싶습니다.",
    author: "Will Rogers"
  },
  {
    talk: "강아지가 당신을 보고도 오지 않는다면 당신은 양심을 돌아봐야 합니다.",
    author: "Woodrow Wilson"
  },
  {
    talk: "인생에서 내 목표는 우리 강아지가 나를 좋은 사람으로 인정하는 사람이 되는 것입니다.",
    author: "Unknown"
  },
  {
    talk: "좋은 강아지를 돈으로 살 수는 있지만, 꼬리치는 강아지를 구입하지는 못 합니다.",
    author: "Josh Billings"
  },
  {
    talk: "강아지가 이유 없이 귀에 대고 심하게 짖는 것은 당신과 항상 차를 타고 가고 싶다는 생각의 표현입니다.",
    author: "Dave Barry"
  },
  {
    talk: "강아지는 사람에게 산책을 설득할 수 있는 나머지 이유 중 하나입니다.",
    author: "O.A"
  },
]

export const dogstalks = atom({
  key: 'dogstalks',
  default: dogsTalk
})