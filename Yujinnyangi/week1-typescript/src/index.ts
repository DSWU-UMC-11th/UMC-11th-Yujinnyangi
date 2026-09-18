/*
type StudyMember = {
  name: string;
  githubId?: string;
};

const members: StudyMember[] = [
  { name: "광수", githubId: "gwangsoo" },
  { name: "지수" },
];


// 1. 회원 배열에서 없는 이름을 찾아 undefined가 나오는지 확인하기
const foundMember = members.find((member) => member.name === "현우");
console.log(foundMember); // undefined

// 2. StudyMember | null 변수에 null을 넣고 의도적으로 비어 있는 상태 표현하기
let selectedMember: StudyMember | null = null;
console.log(selectedMember); // null

selectedMember = members[0]; // 이후 실제로 회원을 선택했다고 가정

// 3. 조건문을 사용해 회원이 있을 때만 이름 출력하기
if (selectedMember) {
  console.log(selectedMember.name);
} else {
  console.log("선택된 회원이 없어요."); // selectedMember가 null이라 이 줄이 실행된다
}

// 4. 학습 시간이 0일 때 ||와 ??의 결과 각각 출력하기
const studyHours = 0;

console.log(studyHours || 10); // 10 -> ||는 0을 falsy로 취급해서 오른쪽 값을 사용한다
console.log(studyHours ?? 10); // 0  -> ??는 null/undefined일 때만 오른쪽 값을 사용하므로 0을 그대로 유지한다

// 5. ?.와 ??를 사용해 GitHub 아이디가 없을 때 "등록되지 않음" 출력하기
const jisu = members[1]; // { name: "지수" } (githubId 없음)
console.log(jisu?.githubId ?? "등록되지 않음");
*/

/*
// ---------------------------------------------
// 미니 실습: unknown 값 구분하기
// ---------------------------------------------

function formatStudyWeek(value: unknown) {
  if (typeof value === "number") {
    return `현재 ${value}주차예요.`;
  }

  if (typeof value === "string") {
    return `입력한 주차: ${value}`;
  }

  return "주차를 확인할 수 없어요.";
}

// 반환 타입을 직접 적지 않고 마우스를 올려 확인한 추론 타입: string
// (typeof로 좁혀도 모든 분기가 결국 문자열을 반환하기 때문에 string으로 추론된다)

console.log(formatStudyWeek(3)); // "현재 3주차예요."
console.log(formatStudyWeek("3주차")); // "입력한 주차: 3주차"
console.log(formatStudyWeek(true)); // "주차를 확인할 수 없어요."


// ---------------------------------------------
// 미니 실습: createBox<T> 사용하기
// ---------------------------------------------

// 1. 값을 받아 { value } 객체로 반환하는 createBox<T> 함수 만들기
function createBox<T>(value: T) {
  return { value };
}

// 2. 문자열, 숫자, 회원 객체를 각각 전달하기
const stringBox = createBox("타입스크립트");
const numberBox = createBox(4);
const memberBox = createBox(members[0]);

// 3. 각 결과의 value에 마우스를 올려 추론된 타입 기록하기
// stringBox.value -> string
// numberBox.value -> number
// memberBox.value -> StudyMember

// 4. 반환 타입을 직접 적지 않아도 입력 타입이 결과에 이어지는지 확인하기
// createBox<T>는 반환 타입을 { value: T }로 따로 적지 않았지만,
// 넘긴 인자의 타입(T)에 따라 반환값의 value 타입이 그대로 이어져서 추론된다.
console.log(stringBox); // { value: "타입스크립트" }
console.log(numberBox); // { value: 4 }
console.log(memberBox); // { value: { name: "광수", githubId: "gwangsoo" } }
*/
// 1. 회원 타입 정의 — ID, 이름, 역할, 선택 값인 GitHub 아이디
type MemberRole = "leader" | "member";

type StudyMember = {
  id: number;
  name: string;
  role: MemberRole;
  githubId?: string; // 선택 값
};

// 2. 서로 다른 정보를 가진 회원 두 명 이상
const members: StudyMember[] = [
  { id: 1, name: "유진", role: "leader", githubId: "gwangsoo" },
  { id: 2, name: "수현", role: "member" }, // GitHub 아이디 없음
];

// 3. 회원 ID로 정보를 찾는 함수
function findMemberById(id: number): StudyMember | undefined {
  return members.find((member) => member.id === id);
}

// 4. 안내 문구를 만드는 함수
// - GitHub 아이디가 없는 회원도, 존재하지 않는 회원도 오류 없이 처리
function createMemberCard(id: number): string {
  const member = findMemberById(id);

  if (!member) {
    return `ID ${id}번 회원을 찾을 수 없어요.`;
  }

  const roleMessage =
    member.role === "leader" ? "스터디를 이끌어요." : "스터디에 참여해요.";
  const githubInfo = member.githubId ?? "등록되지 않음";

  return `${member.name} 님, ${roleMessage} (GitHub: ${githubInfo})`;
}

// 5. ID 1, 2, 999 전달해서 결과 확인
console.log(createMemberCard(1));
console.log(createMemberCard(2));
console.log(createMemberCard(999));