import { Header } from "@/components/header";
import { categorysName } from "@/data";
import { defaultParams } from "@/utils";

interface Layout {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

export default async function Layout({ children, params }: Layout) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: categorysName,
  });

  return (
    <div
      className="flex min-h-screen flex-col gap-8 bg-gray-100 p-10"
      id="categorys"
    >
      <table>
        <thead>
          <tr>
            <th>
              <Header title={(category as string).replaceAll("-", " ")} />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export async function generateStaticParams() {
  return categorysName.map((category) => ({
    category,
  }));
}
