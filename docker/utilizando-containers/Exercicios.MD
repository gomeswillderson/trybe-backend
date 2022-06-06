**Exercícios:**
Localize e baixe a imagem Linux Debian (sem criar um contêiner) utilizando a tag: stable-slim:
`docker pull debian:stable-slim`

Crie e execute o contêiner em modo interativo utilizando a imagem baixada:
`docker container run -it debian:stable-slim,`

Pesquise os Dados da distro do Debian que esta rodando dentro do Contêiner e Encerre o terminal:
`cat /etc/*-release`
`exit`

Verifique na sua lista de contêiner qual contêiner se refere ao exercício que acabou de praticar e
inicie o mesmo contêiner novamente, sem criar outro. Depois valide se ele está ativo na lista de contêiner:
`docker ps -a`
`docker start "id do container"` // você pode colocar apenas os primeiros dígitos do ID
`docker ps`

Retome o contêiner que foi criado anteriormente neste exercício:
`docker attach ad9` // ad9 referencia aos primeiros dígitos do contêiner

Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner e encerre o terminal:
`cat /etc/debian_version`
`exit`

Remova somente o contêiner criado para esse exercício:
`docker container rm ad9`

**Bônus:**
Crie e rode de modo interativo em modo Cleanup, a imagem andrius/ascii-patrol:
`docker run -it --rm andrius/ascii-patrol`// o `-it` permite a interação com o jogo pelo terminal e o `--rm` garante que o contêiner será removido ao terminar o jogo.
