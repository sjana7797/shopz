import AppCard from "./app-card";
import { getAllApps } from "../api/fetcher";
import Render from "@repo/ui/components/render";

async function getAppList() {
  return getAllApps({ limit: 20, page: 1 });
}

async function AppsList() {
  // server interaction
  const { apps } = await getAppList();

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
      <Render renderIf={!apps?.length}>No</Render>

      <Render renderIf={!!apps?.length}>
        {apps?.map((app) => (
          <AppCard
            key={app.id}
            description={app.description}
            link={app.slug}
            metaData={app.metaData}
            title={app.name}
            comingSoon={app.comingSoon}
          />
        ))}
      </Render>
    </ul>
  );
}

export default AppsList;
