import isProd from 'is-prod';

const cfg = {
    CHECK_INTERVAL: 2000
};

if (isProd.isDevelopment()) {
    cfg.API_HOST = "http://localhost:8000/api";
} else {
    cfg.API_HOST = "https://air.untill.ru/airs-router";
}

export default cfg;

/*
export default {
    //API_HOST: "https://air.untill.ru/airs-router", // in production
    //API_HOST: "http://kvvw10:8822", // testing on casandra
    API_HOST: "http://localhost:8000/api", // testing on serverstub
    CHECK_INTERVAL: 2000
};
*/