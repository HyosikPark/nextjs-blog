import Link from "next/link";

function Index() {
  return <Link href="/">뒤로가기</Link>;
}

export async function getServerSideProps() {
  return { props: { obj: null } };
}

export default Index;
