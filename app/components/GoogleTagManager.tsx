"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import useUserIP from "../hooks/useUserIP";
import { useParams } from "next/navigation";


const GoogleTagManager = () => {
    const { temperature, slug } = useParams();
    const userIp = useUserIP(); // Captura o IP no carregamento
    console.log('meu ip =>', userIp);
    useEffect(() => {
        const defaultGtmId = 'GTM-K25DQZDB';
        const oroOrgGtmId = 'GTM-K25DQZDB';
        const normalizedTemperature = (Array.isArray(temperature) ? temperature[0] : temperature || '').toLowerCase();
        const normalizedSlug = (Array.isArray(slug) ? slug : slug ? [slug] : [])
            .map((segment) => segment.toLowerCase());
        const isNomineesSlug = normalizedSlug.length === 1 && normalizedSlug[0] === 'nominees';

        if (isNomineesSlug) {
            console.log('gtmId =====> ', '');
            return;
        }

        const getGtmIdByHostname = (hostname: string) => {
            // Normaliza host (ignora porta, se houver)
            const cleanHost = hostname.split(':')[0].toLowerCase();

            // Captura subdomínio (primeiro label)
            const [firstLabel] = cleanHost.split('.');

            // Mapeamento por subdomínio específico
            const map: Record<string, string> = {
                mt: 'GTM-K72SR8R4',
                gg: 'GTM-NNCP73G5',
                tt: 'GTM-WD86PJNQ',
            };

            // Se houver correspondência exata para o primeiro label, usa-a
            if (map[firstLabel]) return map[firstLabel];

            // Mantém o atual para o domínio principal e demais casos
            return defaultGtmId;
        };

        const getGtmIdByPathname = (pathname: string) => {
            const normalizedPath = pathname.toLowerCase();
            const isOroRoute = normalizedPath.includes('/oro');
            const isRpcRoute = normalizedPath.includes('/rpc');
            const isEligibleTemperature = normalizedTemperature === 'o' || normalizedTemperature === 'org';
            if (isOroRoute && isEligibleTemperature) return oroOrgGtmId;
            if (isRpcRoute && isEligibleTemperature) return oroOrgGtmId;
            return defaultGtmId;
        };

        const host = typeof window !== 'undefined' ? window.location.hostname : '';
        const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
        const gtmIdByPath = getGtmIdByPathname(pathname);
        const gtmId = gtmIdByPath !== defaultGtmId
            ? gtmIdByPath
            : host
                ? getGtmIdByHostname(host)
                : defaultGtmId;
        console.log('gtmId =====> ', gtmId)
        TagManager.initialize({ gtmId });
    }, [temperature, slug]);

    return null; // Esse componente não precisa renderizar nada
};

export default GoogleTagManager;
