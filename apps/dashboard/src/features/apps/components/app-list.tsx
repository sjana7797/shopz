import AppCard from "./app-card";
import { getAllApps } from "../api/fetcher";

async function getAppList() {
  return getAllApps({ limit: 20, page: 1 });
}

async function AppsList() {
  // server interaction
  const { apps } = await getAppList();
  //   const apps = data?.pages.flatMap((page) => page.apps);

  //   console.log(data?.pages, "apps");

  return (
    <ul className="grid auto-rows-min gap-4 md:grid-cols-3">
      {/* <Render renderIf={isLoading}>Loading...</Render>
      <Render renderIf={isError}>Error!</Render>
      <Render renderIf={!isLoading}> */}
      {apps?.map((app) => (
        <AppCard
          key={app.id}
          description={app.description}
          link={app.slug}
          metaData={app.metaData}
          title={app.name}
        />
      ))}
      {/* </Render> */}
    </ul>
  );
}

export default AppsList;
