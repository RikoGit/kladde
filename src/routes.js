const routes = [
    { path: '', title: 'Главная' },
    { path: 'mult', title: 'Мультик' },
    { path: 'harvest', title: 'Бабуленькин урожай' },
    { path: 'kittens', title: 'Бабуленькины котятки' },
    { path: 'vanillaform', title: 'Проверка формы' },
    { path: 'form', title: 'Проверка формы (react)' },
    { path: 'vanillamemoji', title: 'Memoji' },
    { path: 'commonmodelmemoji', title: 'Memoji (общая модель)' },
    { path: 'memoji', title: 'Memoji (react)' },
    { path: 'reduxmemoji', title: 'Memoji (redux)' },
    { path: 'simon', title: 'Simon /в разработке' },
    { path: 'todo', title: 'TODO' },
    { path: 'memegenerator', title: 'Meme generator' },
];

export const routesForMapping = [...routes];
const emptyPathIndex = routesForMapping.findIndex(({ path }) => path === '');

if (emptyPathIndex !== -1) {
    const [emptyPathRoute] = routesForMapping.splice(emptyPathIndex, 1);
    routesForMapping.push(emptyPathRoute);
}

export default routes;
