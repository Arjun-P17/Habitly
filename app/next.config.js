const path = require("path");

const withTM = require("next-transpile-modules")([
    "@fullcalendar/react",
    "@fullcalendar/bootstrap",
    "@fullcalendar/core",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/timegrid",
    "@fullcalendar/list",
    "@fullcalendar/interaction",
    "@fortawesome/fontawesome-free",
    "react-time-picker",
    "react-clock",
]);

module.exports = withTM({
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
});
