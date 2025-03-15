
import {PrismaClient} from "@repo/db/client"
const client=new PrismaClient();

export default function Home() {
  return (
    <div className="p-10">
      hello
    </div>
  );
}
