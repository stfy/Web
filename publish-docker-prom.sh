docker tag rg.fr-par.scw.cloud/easychain/forta/forta-ui:latest cr.yandex/crplb38ladkov5f9q8bv/forta-ui:prod
docker push cr.yandex/crplb38ladkov5f9q8bv/forta-ui:prod

ssh toor@84.201.151.165 <<'ENDSSH'
    sh update-afford.sh
ENDSSH
