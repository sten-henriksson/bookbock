https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
https://www.npmjs.com/package/path-sort

# todo

- 2 list component with library
- 2 search page with url param
- 2 seachbar component and api call
- 3 url param page component that display book info ipfs link and ipfs cid

# done

- server calls with incrimental static props


# home page: select games and searchbar
> game page = path sort


version: "3.7"
services:
  gluetun:
    image: qmcgaw/gluetun
    container_name: gluetun
    cap_add:
      - NET_ADMIN
    ports:
      - 8000:8000 # Remote Control VPN
      - 8888:8888 # Tinyproxy
      - 9117:9117 # Jackett
      - 9091:9091 # Transmission
      - 51413:51413 # Transmission
      - 51413:51413/udp # Transmission
    environment:
      - VPNSP=private internet access
      - USER=<your username>
      - PASSWORD=<your password>
      - TZ=<your timezone>
      - UID=1000
      - GID=1000
      - REGION=<your region>
      - FIREWALL_OUTBOUND_SUBNETS=10.0.0.0/8
      - HTTPPROXY=on
    dns:
      - 209.222.18.222 # Default to PIA DNS servers
      - 209.222.18.218
    restart: always

  transmission:
    image: linuxserver/transmission
    container_name: transmission
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=<your timezone>
    volumes:
      - transmission-config:/config
      - <your folder>:/downloads/complete
      - <your folder>:/downloads/incomplete
    network_mode: 'service:gluetun'
    depends_on:
      - gluetun
    restart: always

  jackett:
    image: linuxserver/jackett
    container_name: jackett
    environment:
      - PGID=1000
      - PUID=1000
      - TZ=<your timezone>
    volumes:
      - jackett-config:/config
    network_mode: 'service:gluetun'
    depends_on:
      - gluetun
    restart: always

  sonarr:
    image: linuxserver/sonarr:preview
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=<your timezone>
      - UMASK_SET=022
    volumes:
      - sonarr-config:/config
      - <your folder>:/downloads/complete
      - <your folder>:/media
    ports:
      - 8989:8989
    depends_on:
      - jackett
      - transmission
    restart: always

  radarr:
    image: linuxserver/radarr
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=<your timezone>
      - UMASK_SET=022
    volumes:
      - radarr-config:/config
      - <your folder>:/downloads/complete
      - <your folder>:/media
    ports:
      - 7878:7878
    depends_on:
      - jackett
      - transmission
    restart: always

volumes:
  transmission-config:
    external: true
  jackett-config:
    external: true
  sonarr-config:
    external: true
  radarr-config:
    external: true