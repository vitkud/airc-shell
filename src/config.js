import isProd from 'is-prod';

const cfg = {
    CHECK_INTERVAL: 2000
};

if (isProd.isDevelopment()) {
    cfg.API_HOST = "http://localhost:8000/api";
} else {
    //cfg.API_HOST = "https://air.untill.ru/airs-router";
    //cfg.API_HOST = "http://kvvw10:8822";
    cfg.API_HOST = "https://airtest.untill.ru/airs-router";
}

export default cfg;
