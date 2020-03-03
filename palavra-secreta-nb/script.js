let tempoDeCadaRodada = 75
let numTimes = 0;
let times = [];
let timeDaVez = 0
let tempoPreparar = 3
let tempoRodada = tempoDeCadaRodada
let tempoPulando = 2
let revisarPalavras = [];
let numRodadas = 0
let categoriaAtual = '';

function confirmExit() {
    return "deseja fechar?";
} 

window.onbeforeunload = confirmExit;

let animais = ['girafa', 'panda', 'leão', 'tigre', 'porco', 'cachorro', 'vaca', 'gato', 'ovelha', 'pato', 'coelho', 'zebra', 'águia', 'abelha', 'baleia', 'camaleão', 'camelo', 'elefante', 'foca', 'golfinho', 'hipopótamo', 'hiena', 'jacaré', 'lagarto', 'macaco', 'cobra', 'papagaio', 'raposa', 'rato', 'tartaruga', 'urso polar', 'urubu', 'veado', 'aranha', 'arara', 'avestruz', 'barata', 'beija-flor', 'bezerro', 'bode', 'boi', 'borboleta', 'jumento', 'cabra', 'camarão', 'dromedário', 'canguru', 'capivara', 'caracol', 'caranguejo', 'carrapato', 'pulga', 'cavalo', 'cavalo-marinho', 'cegonha', 'cigarra', 'cisne', 'codorna', 'coruja', 'crocodilo', 'dinossauro', 'escorpião', 'esquilo', 'estrela-do-mar', 'falcão', 'formiga', 'gafanhoto', 'gaivota', 'galinha', 'galo', 'gambá', 'ganso', 'garça', 'gavião', 'gorila', 'grilo', 'iguana', 'javali', 'joaninha', 'lagarta', 'lagartixa', 'lagosta', 'leopardo', 'lesma', 'lhama', 'lobo', 'lula', 'mamute', 'mariposa', 'marmota', 'minhoca', 'morcego', 'mosca', 'mosquito', 'mula', 'onça', 'ostra', 'pantera', 'pardal', 'pavão', 'periquito', 'pernilongo', 'sapo', 'peru', 'pica-pau', 'pinguim', 'piolho', 'piranha', 'polvo', 'pombo', 'pônei', 'porco-espinho', 'bicho preguiça', 'rã', 'raia', 'rinoceronte', 'salmão', 'sanguessuga', 'sardinha', 'siri', 'tamanduá', 'tatu', 'toupera', 'touro', 'tubarão', 'tucano', 'urso', 'vaga-lume', 'vespa', 'andorinha', 'coiote', 'castor', 'ganso', 'peixe-espada', 'aedes aegypti', 'boto', 'calango', 'furão', 'ouriço', 'anaconda', 'besouro', 'carneiro', 'jegue', 'libélula', 'marimbondo', 'orangotango', 'chipanzé', 'naja', 'ornitorrinco', 'peixe', 'quati', 'sagui', 'serpente', 'pitbul', 'poodle', 'rottweiler', 'anta', 'búfalo', 'camundongo', 'canário', 'centopeia', 'coala', 'corvo', 'penguin', 'abutre', 'ácaro', 'alce', 'antílope', 'canário', 'cupim', 'égua', 'ema', 'faisão', 'hamster', 'guaxinim', 'jabuti', 'jaguar', 'jamanta', 'lebre', 'lombriga', 'lontra', 'marreco', 'mico', 'morsa', 'pelicano', 'perereca', 'rena', 'preá', 'sabiá', 'salamandra', 'suricate', 'pitbul', 'labrador', 'poodle', 'rottweiler', 'bisão', 'enguia', 'puma', 'louva-deus'];

let objetos = ['faca', 'garfo', 'colher', 'prato', 'geladeira', 'fogão', 'torneira', 'panela', 'caixa', 'lâmpada', 'bujão de gás', 'detergente', 'tomada', 'janela', 'porta', 'abajur', 'agulha', 'alfinete', 'algema', 'alicate', 'almofada', 'âncora', 'anel', 'antena', 'anzol', 'apito', 'apontador', 'arco', 'aspirador', 'bacia', 'balança', 'banco', 'bengala', 'berço', 'bicicleta', 'bigorna', 'bonóculo', 'bóia', 'bisturi', 'bola', 'boneca', 'borracha', 'botão', 'brinco', 'bule', 'bumerangue', 'cabide', 'cadeado', 'cadeira', 'caderno', 'cálice', 'caneta', 'canivete', 'capacete', 'celular', 'chicote', 'chinelo', 'chupeta', 'colchão', 'copo', 'dado', 'dardo', 'dentadura', 'desentupidor', 'desodorante', 'despertador', 'diamante', 'dicionário', 'dinamite', 'disco', 'elástico', 'envelope', 'enxada', 'escada', 'escova', 'escudo', 'espada', 'espelho', 'esponja', 'estátua', 'extintor', 'ferradura', 'fita adesiva', 'flauta', 'flecha', 'foice', 'folha', 'frasco', 'funil', 'gaiola', 'gancho', 'garrafa', 'gaveta', 'gravata', 'guarda-chuva', 'guarda-sol', 'guilhotina', 'guitarra', 'helicóptero', 'ímã', 'impressora', 'ioiô', 'isqueiro', 'jaqueta', 'jornal', 'lanterna', 'lápis', 'lata', 'leque', 'liquidificador', 'livro', 'luneta', 'luva', 'maçaneta', 'maçarico', 'machado', 'maiô', 'mala', 'mamadeira', 'manequim', 'mangueira', 'marreta', 'martelo', 'máscara', 'meia', 'microfone', 'microscópio', 'mochila', 'mola', 'notebook', 'óculos', 'pandeiro', 'parafuso', 'paraquedas', 'piano', 'picareta', 'pincel', 'pingente', 'pistola', 'placa', 'pulseira', 'quadro', 'lousa', 'rádio', 'raquete', 'ratoeira', 'rede', 'régua', 'relógio', 'remo', 'retrovisor', 'revista', 'revolver', 'rodo', 'rolha', 'sabonete', 'sacola', 'sanfona', 'saxofone', 'secador', 'seringa', 'serrote', 'sino', 'sirene', 'skate', 'sofá', 'spray', 'tábua', 'tabuleiro', 'taça', 'tamanco', 'tambor', 'tampa', 'teclado', 'telefone', 'televisão', 'telha', 'tênis', 'termômetro', 'tesoura', 'tigela', 'tijolo', 'touca', 'trampolim', 'travesseiro', 'vara', 'vaso', 'vassoura', 'vela', 'ventilador', 'violão', 'violino', 'volante', 'shampoo', 'zíper', 'giz', 'boné', 'cola', 'pneu', 'saia', 'batom', 'bolsa', 'bomba', 'buquê', 'flor', 'canoa', 'carta', 'chave', 'cofre', 'corda', 'foice', 'moeda', 'motor', 'pedal', 'pente', 'prego', 'radar', 'paletó', 'agenda', 'alarme', 'buzina', 'cabide', 'canudo', 'chapéu', 'espeto', 'hélice', 'lâmina', 'míssil', 'patins', 'peruca', 'pijama', 'sapato', 'tapete', 'xícara', 'aquário', 'armário', 'bateria', 'cadarço', 'carimbo', 'cartola', 'charuto', 'chupeta', 'coleira', 'cortina', 'esmalte', 'fusível', 'lixeira', 'monitor', 'peneira', 'perfume', 'prancha', 'bandeira', 'caminhão', 'carteira', 'chuveiro', 'panfleto', 'pen drive', 'farol', 'fio dental', 'furadeira', 'câmera', 'guindaste', 'computador', 'frigideira', 'micro-ondas', 'cinto', 'toalha', 'churrasqueira', 'saleiro', 'DVD', 'CD', 'divã', 'estojo', 'boia', 'baú', 'pipa', 'roda', 'urna', 'adaga', 'álbum', 'balão', 'arpão', 'balde', 'balsa', 'broca', 'bucha', 'cesta', 'gaita', 'pinça', 'papel', 'colar', 'jarra', 'rédea', 'terno', 'tumba', 'varal', 'trono', 'barril', 'bastão', 'bazuca', 'broche', 'caixão', 'cajado', 'caneca', 'crachá', 'cômoda', 'concha', 'cutelo', 'fivela', 'colete', 'fronha', 'grelha', 'guidão', 'lençol', 'lustre', 'muleta', 'pacote', 'pérola', 'peteca', 'pomada', 'rodapé', 'tanque', 'tatame', 'tobogã', 'webcam', 'bota', 'cabo', 'cama', 'cano', 'capa', 'cera', 'cruz', 'gibi', 'iate', 'laço', 'lona', 'lupa', 'pote', 'tela', 'blusa', 'calça', 'mouse', 'controle', 'pires', 'sunga', 'avião', 'biquini', 'poste', 'ar condicionado', 'cocar', 'pregador de roupa', 'grampeador', 'piscina', 'fogos de artifício', 'bússola', 'videogame', 'assadeira', 'algodão', 'aspirina', 'árvore de natal', 'montanha russa', 'prata', 'ouro', 'rubi', 'esmeralda', 'muro', 'fusca', 'elevador', 'filtro', 'coador', 'sandália', 'chaveiro', 'pinico', 'diário', 'harpa', 'navalha', 'kimono', 'walkman', 'carroça', 'boleto', 'cortador de unha', 'papel higiênico', 'fita cassete'];

let tvCinema = ['Programa do Sílvio Santos', 'Domingão do Faustão', 'Fantástico', 'Jornal Nacional', 'A Praça é Nossa', 'MasterChef', 'Big Brother Brasil', 'Esporte Espetacular', 'Globo Esporte', 'Star Wars', 'Avatar', 'Pantera Cor-de-Rosa', 'Minions', 'Simpsons', 'A Era do Gelo', 'A Vida é Bela', 'As Branquelas', 'Piratas do Caribe', 'Argo', 'A Culpa é das Estrelas', 'Procurando Nemo', 'Senhor dos Aneis', 'Carga Explosiva', 'Crepúsculo', 'Como se Fosse a Primeira Vez', 'Transformers', 'Como treinar seu Dragão', 'Meu Malvado Favorito', 'Jumanji', 'Ghost: do Outro Lado da Vida', 'Herbie', 'Monstros SA', 'Inspetor Bugiganga', 'Marley e Eu', 'Missão Impossível', '007', 'Titanic', 'De Volta Para o Futuro', 'Vingadores', 'Quem Quer Ser um Milionário', 'Jurassic Park', 'Toy Story', 'O Rei Leão', 'Up - Altas Aventuras', 'Velozes e Furiosos', 'Rambo', 'O Exterminador do Futuro', 'Duro de Matar', 'Matrix', 'Poderoso Chefão', 'Fronzen', '11 Homens e Um Segredo', 'Gladiador', 'Alice no País das Maravilhas', 'O Mágico de Oz', 'E o Vento Levou', 'Casablanca', 'Psicose', 'Loucademia de Polícia', 'Apertem os cintos, o Piloto Sumiu', 'Forrest Gump', 'ET', 'Tubarão', 'Divertidamente', 'A Origem', 'Independence Day', 'O Código da Vinci', 'Família Adams', 'MIB', 'Interestelar', 'Nasce Uma Estrela', 'Planeta dos Macacos', 'Liga da Justiça', 'Ratatouille', 'Mamma Mia', 'Madagascar', 'Mad Max', 'X-Men', 'Ted', 'Jogos Vorazes', 'Quarteto Fantástico', 'Tartarugas Ninjas', 'Se Beber Não Case', 'Friends', 'Tropa de Elite', 'Cidade de Deus', 'Cavaleiros do Zodíaco', 'Alien', 'Edward Mãos de Tesoura', 'Bourne', 'Náufrago', 'Prenda-me se For Capaz', 'Os Trapalhões', 'Bourne', 'Show do Milhão', 'A Bela e a Fera', 'Ace Ventura', 'A Grnade Família', 'Sai de Baixo', 'Karatê Kid', 'La Casa de Papel', '101 Dálmatas', 'Esqueceram de Mim', 'Frozen', 'O Chamado', 'Todo Mundo em Pânico', 'A Noviça Rebelde', 'Uma Mente Brilhante', 'A Volta ao Mundo em 80 Dias', 'O Terminal', 'Gente Grande', 'Debi e Lóide', 'Diamante de Sangue', 'Entrando Numa Fria', 'À Procura da Felicidade', 'Angry Birds', 'Kung Fu Panda', 'Formiguinhas', 'Vida de Inseto', 'O Corcunda de Notre Dame', 'Todo Poderoso', 'A Fantástica Fábrica de Chocolate', 'Top Gun', 'Stranger Things', 'Breaking Bad', 'CSI', 'Todo Mundo Odeia o Chris', 'Nos Embalos de Sábado a Noite', 'Tomb Raider', 'Corrida Maluca', 'Os Flintstones', 'Os Três Mosqueteiros', 'Dr. Dolittle', 'Mudança de Hábito', 'A Invenção de Hugo Cabret', 'A Fuga das Galinhas', 'Os Infiltrados', 'A Lagoa Azul', '2001 Uma Odisséia no Espaço', 'A Lista de Schindler', 'Sempre ao seu Lado', 'O Cavaleiro das Trevas', 'Spotlight - Segredos Revelados', 'Guerra ao Terror', 'Lawrence da Arábia', 'O Silêncio dos Inocentes', 'Um Estanho no Ninho', 'Amadeus', 'O Discurso do Rei', 'Onde os Fracos Não Tem Vez', 'Manina de Ouro', 'Rain Man', 'Ben-Hur', 'Chicago', 'O Paciente Ingles', 'Dança com Lobos', 'Coração Valente', 'Capitão Philips', 'Anjos e Demônios', 'Sully', 'O Resgate do Soldado Ryan', 'À Espera de um Milagre', 'O Regresso', 'Era uma vez em Hollywood', 'Ilha do Medo', 'Django livre', 'O Aviador', 'O Livro de Eli', 'O Irlandês', 'Eu sou a Lenda', 'Eu Robô', 'Detona Ralph', 'Hancock', 'Bad Boys', 'Antes de Partir', 'Um Sonho de Liberdade', 'Invasão à Casa Branca', 'Um Truque de Mestre', 'O Último Samurai', 'Top Gun', 'Point Break - Caçadores de Emoção', 'Velocidade Máxima', 'Oblivion', 'Game of Thrones', 'Black Mirror', 'Lost', 'South Park', 'Globo', 'SBT', 'Disney'];

let lugares = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Manaus', 'Belém', 'Tocantins', 'Alagoas', 'Maceió', 'Bahia', 'Salvador', 'Ceará', 'Fortaleza', 'Maranhão', 'Paraíba', 'Pernambuco', 'Recife', 'Piauí', 'Teresina', 'Rio Grande do Norte', 'Natal', 'Sergipe', 'Aracajú', 'Goiás', 'Goiânia', 'Mato Grosso', 'Cuiabá', 'Mato Grosso do Sul', 'Campo Grande', 'Brasília', 'Espírito Santo', 'Vitória', 'Minas Gerais', 'Belo Horizonte', 'São Paulo', 'Rio de Janeiro', 'Paraná', 'Curitiba', 'Rio Grande do Sul', 'Porto Alegre', 'Santa Catarina', 'Florianópolis', 'Brasil', 'Argentina', 'Buenos Aires', 'Bolívia', 'Chile', 'Colômbia', 'Equador', 'Paraguai', 'Peru', 'Uruguai', 'Venezuela', 'México', 'Estados Unidos', 'Canadá', 'Nova York', 'Alemanha', 'Berlim', 'Bélgica', 'Croácia', 'Dinamarca', 'Escócia', 'Espanha', 'Madri', 'França', 'Paris', 'Grécia', 'Atenas', 'Inglaterra', 'Londres', 'Itália', 'Roma', 'Noruega', 'Portugal', 'Lisboa', 'Russia', 'Turquia', 'Moscou', 'Holanda', 'Amsterdã', 'África do Sul', 'Angola', 'Egito', 'Etiópia', 'Madagascar', 'Marrocos', 'China', 'Pequim', 'Japão', 'Tóquio', 'Coreia do Sul', 'Índia', 'Cingapura', 'Vietnã', 'Afeganistão', 'Arábia Saudita', 'Emirados Árabes Unidos', 'Dubai', 'Iraque', 'Israel', 'Líbano', 'Síria', 'Australia', 'Nova Zelândia', 'Panamá', 'Cuba', 'Alasca', 'Machu Pichu', 'Veneza', 'Los Angeles', 'Las Vegas', 'Hollywood', 'Barcelona', 'Miami', 'Roma', 'Hong Kong', 'Jamaica', 'Groelândia', 'Chernobyl', 'Suiça', 'Polônia', 'Hungria', 'Irã', 'Costa Rica', 'Tailândia', 'Nigéria', 'Haiti', 'Viena', 'Chicago', 'Guarulhos', 'Havana', 'Fernando de Noronha', 'Foz do Iguaçu', 'Everest', 'Copacabana', 'restaurante', 'escola', 'igreja', 'Maracanã', 'Posto de Gasolina', 'hospital', 'delegacia', 'hotel', 'Flórida', 'fazenda', '25 de Março', 'Brás', 'praia', 'rodoviária', 'aeroporto', 'estação de trem', 'ginásio', 'academia', 'estádio', 'lua', 'marte', 'saturno', 'muralha da China', 'polo norte', 'antártida', 'hospício', 'asilo', 'Olinda', 'Oceano Pacífico', 'Oceano Atlântico', 'Quênia', 'Mongólia', 'vênus', 'Rio São Francisco', 'Pantanal', 'Mar Mediterrâneo', 'pentágono', 'Disneylândia', 'Taj Mahal', 'Torre Eiffel', 'cinema', 'shopping', 'zoológico', 'Orlando', 'caverna', 'pirâmides do Egito', 'Estátua da Liberdade', 'Cristo Redentor', 'Budapeste', 'Eslováquia', 'Qatar', 'Bulgária', 'Bahamas', 'Malásia', 'Ucrânia', 'Senegal', 'Sudão', 'Congo', 'Moçambique', 'Calcutá', 'Bangkok', 'Cairo', 'Xangai', 'Seul', 'Istambul', 'Bogotá', 'Varsóvia', 'Munique', 'Copenhagen', 'Estocolmo', 'Dublin', 'Frankfurt', 'Sevilha', 'Minsk', 'Bruxelas', 'Lima', 'Santiago', 'Houston', 'Nepal', 'cemitério', 'banheiro', 'oficina', 'açougue', 'biblioteca', 'circo', 'coliseu', 'Disneylândia'];

let pessoas = ['Angelina Jolie', 'Amy Whinehouse', 'Adele', 'Anitta', 'Ana Maria Braga', 'Belo', 'Adam Sandler', 'Beyoncé', 'Brad Pitt', 'Bruno e Marrone', 'Sandy e Júnior', 'Bruce Willis', 'Barack Obama', 'Carmen Miranda', 'Bill Gates', 'Steve Jobs', 'Britney Spears', 'Chorão', 'Beatles', 'John Lenon', 'Eddie Murphy', 'Paul Mcartney', 'Erick Jaquin', 'Ed Sheeran', 'Fátima Bernardes', 'William Boner', 'Fausto Silva', 'Galvão Bueno', 'George Clooney', 'Ozzy Osbourne', 'Gugu', 'Gretchen', 'Harrison Ford', 'Ivete Sangalo', 'Justin Bieber', 'Datena', 'Joelma', 'Jô Soares', 'Keanu Reeves', 'Leonardi di Caprio', 'Lady gaga', 'Luciano Huck', 'Lulu Santos', 'Madonna', 'Michael Jackson', 'Opra Winfrey', 'Quentin Tarantino', 'Robert Downey Jr.', 'Johnny Depp', 'Renato Aragão (Didi)', 'Elvis Presley', 'Donald Trump', 'George Bush', 'Jair Bolsonaro', 'Luís Inácio Lula da Silva', 'Fernando Henrique', 'Roberto Carlos', 'Bill Clinton', 'Shakira', 'Tom Hanks', 'Rihanna', 'Jim Carrey', 'Steven Spielberg', 'Tiago Leifert', 'Tony Ramos', 'Tadeu Schmidt', 'Will Smith', 'Whindersson Nunes', 'Zezé di Camargo', 'Zeca Pagodinho', 'Xuxa', 'Tom Cruise', 'Eminem', 'Frank Sinatra', 'Nelson Mandela', 'Martin Luther King', 'Júlio Cesar', 'Dwayne (The Rock) Johnson', 'Charles Darwin', 'Albert Einstein', 'Jennifer Aniston', 'Leonardo da Vinci', 'Thomas Edison', 'Walt Disney', 'Neil Armstrong', 'Santos Dumond', 'Adolf Hitler', 'Arnold Schwarzenegger', 'Fidel Castro', 'Coco Chanel', 'Pablo Picasso', 'Charlie Chaplin', 'Cleópatra', 'Napoleão Bonaparte', 'Mahatma Gandhi', 'Socrates', 'William Shakespeare', 'Galileo Galilei', 'Maomé', 'Aristóteles', 'Isaac Newton', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Genghis Kahn', 'Sílvio Santos', 'Michelangelo', 'Raul Gil', 'Pedro Bial', 'Chitãozinho e Xororó', 'Caetano Veloso', 'Sigmund Freud', 'Vincent van Gogh', 'Freddie Mercury', 'Queen', 'Elton John', 'Stevie Wonder', 'David Bowie', 'Ray Charles', 'Bob Marley', 'Rolling Stones', 'Guns n Roses', 'Vin Diesel', 'AC/DC', 'Eric Clapton', 'Maryl Strip', 'Morgan Freeman', 'Fernanda Montenegro', 'Sandra Bullock', 'Miguel Falabela', 'Nicolas Cage', 'John Travolta', 'Jackie Chan', 'Pink Floyd', 'U2', 'Led Zeppelin', 'Renato Russo', 'Cazuza', 'Gisele Bundchen', 'Mamonas Assassinas', 'Julia Roberts', 'Ellen DeGeneres', 'Bruce Lee', 'Chuck Norris', 'Sylvester Stallone', 'Jean Claude Van Damme', 'Mel Gibson', 'Cristóvão Colombo', 'Taylor Swift', 'Mark Zuckerberg', 'Bob Dylan', 'Nicole Kidman', 'Che Guevara', 'Marilyn Monroe', 'Osama Bin Laden', 'Axl Rose', 'Ben Stiller', 'Robert De Niro', 'Al Pacino', 'Samuel L. Jackson', 'Capital Inicial', 'Jota Quest', 'Skank', 'Legião Urbana', 'Os Paralamas do Sucesso', 'Los Hermanos', 'Engenheiros do Hawaii', 'Charlie Brown Jr.', 'RPM', 'Coldplay', 'Red Hot Chilli Peppers', 'Nirvana', 'Metallica', 'Linkin Park', 'Bon Jovi', 'Jennifer Lopez', 'Biquini Cavadão', 'Tim Maia', 'Hebe Camargo', 'George Lucas', 'juscelino kubitschek', 'Monteiro Lobato', 'Machado de Assis', 'Clarice Lispector', 'Chico Buarque', 'Djavan', 'Carla Perez', 'Marco Polo', 'Sérgio Moro', 'Chiquititas', 'Chico Anysio', 'Mike Tyson', 'Bussunda', 'Beto Carreiro', 'Joana darc', 'Buda', 'Ziraldo', 'Maurício de Souza', 'Tom Jobin', 'Antônio Fagundes', 'Thomas Alva Edson', 'Graham Bell', 'É o Tchan!', 'Princesa Diana', 'Karl Marx', 'Martinho Lutero', 'Nikola Tesla', 'Clint Eastwood', 'Denzel Washington', 'Jack Nicholson', 'Matt Damon', 'Robin Williams', 'Kevin Spacey', 'Scarlet Johansson', 'Mariah Carey', 'Christina Aguilera', 'Aretha Franklyn', 'Prince', 'Mick Jagger', 'Zé Ramalho', 'Johnny Cash', 'Chris Rock', 'Paul Walker', 'Rodrigo Santoro', 'ABBA', 'Rita Lee', 'Dilma Roussef', 'Beto Carrero'];

let esportes = ['tourada', 'pesca', 'caça bandeira', 'cabo de guerra', 'atletismo', 'golfe', 'salto ornamental', 'basebol', 'handebol', 'ping pong', 'basquete', 'hipismo', 'arco e flecha', 'boxe', 'judô', 'tiro esportivo', 'canoagem', 'triatlo', 'ciclismo', 'natação', 'vela', 'esgrima', 'vôlei de quadra', 'futebol', 'remo', 'ginástica', 'halterofilismo', 'hóquei', 'nado sincronizado', 'polo aquático', 'futebol americano', 'taekwondo', 'tênis', 'vôlei de praia', 'esqui', 'patinação', 'snowboard', 'skate', 'motocross', 'fórmula 1', 'salto em altura', 'salto em distância', 'salto com vara', 'arremesso de peso', 'marcha atlética', 'karatê', 'sumô', 'kung fu', 'surf', 'pakour', 'alpinismo', 'capoeira', 'boliche', 'futsal', 'sinuca', 'paintball', 'rally', 'maratona', 'mergulho', 'xadrez', 'mountain bike', 'rodeio', 'queimada', 'rapel', 'frisbee', 'peteca', 'squash', 'UFC', 'Jiu-Jitsu', 'muay thai', 'queda de braço', 'futevôlei', 'fisiculturismo', 'rafting', 'paraquedismo', 'yoga', 'dardos', 'Ayrton Senna', 'David Beckham', 'Kaka', 'Messi', 'Cristiano Ronaldo', 'Michael Schumacher', 'Neymar', 'Pelé', 'Romário', 'Tiger Woods', 'Ronaldinho Gaúcho', 'Oscar Schmidt', 'Usain Bolt', 'Michael Jordan', 'Zinédine Zidane', 'Diego Maradona', 'Rafael Nadal', 'Roger Federer', 'Zagallo', 'Nelson Piquet', 'Emerson Fittipaldi', 'Garrincha', 'poker', 'Michael Phelps', 'Real Madrid (time)', 'Barcelona (time)', 'Corinthians', 'Palmeiras', 'Santos (time)', 'Flamengo (time)', 'Vasco (time)', 'Grêmio (time)', 'Cruzeiro (time)', 'Manchester United (time)', 'Liverpool (time', 'Juventus (time)', 'Chelsea (time)', 'Felipe Massa', 'Rubinho Barrichelo', 'Lewis Hamilton', 'Banco Imobiliário', 'Olimpíadas', 'truco', 'baralho', 'dominó', 'Copa do Mundo', 'Uno', 'NBA', 'batalha naval', 'medalha', 'troféu', 'pódio', 'Copa Libertadores', 'amarelinha', 'gincana', 'futebol de botão', 'sudoku', 'automobilismo', 'pilates'];

let profissao = ['advogado', 'aeromoça', 'arquiteto', 'astronauta', 'ator', 'cantor', 'atleta', 'baba', 'bailarina', 'cabeleireiro', 'bombeiro', 'policial', 'caminhoneiro', 'carpinteiro', 'marceneiro', 'desenhista', 'cozinheiro', 'dentista', 'detetive', 'eletricista', 'encanador', 'faxineiro', 'enfermeira', 'engenheiro', 'farmacêutico', 'médico', 'fotógrafo', 'guia turístico', 'intperprete', 'jardineiro', 'costureira', 'maestro', 'manicure', 'marinheiro', 'massagista', 'meteorologista', 'missionário', 'garçom', 'músico', 'estilista', 'nutricionista', 'fiscal', 'padeiro', 'peão', 'gari', 'programador', 'político', 'pintor','químico', 'jornalista', 'reporter', 'juiz', 'segurança', 'taxista', 'motorista', 'tradutor', 'pescador', 'zelador', 'publicitário', 'psicólogo', 'luthier', 'personal trainer', 'piloto', 'salva-vidas', 'sapateiro', 'tatuador', 'ladrão', 'veterinário', 'pizzaiolo', 'adestrador', 'alfaiate', 'borracheiro', 'empreendedor', 'feirante', 'funileiro', 'lixeiro', 'manobrista', 'mineiro', 'ourives', 'porteiro', 'secretária', 'vaqueiro', 'agricultor', 'mecânico', 'contador', 'escritor', 'professor', 'instrutor', 'diretor', 'comentarista', 'agrônomo', 'cientista', 'biólogo', 'matemático', 'geólogo', 'físico', 'arqueólogo', 'filósofo', 'sociólogo', 'psiquiatra', 'cirurgião', 'pediatra', 'cardiologista', 'ortopedista', 'fisioterapeuta', 'geriatra', 'dermatologista', 'ginecologista', 'socorrista', 'locutor', 'CEO', 'oftalmologista', 'dermatologista', 'metalúrgico', 'ferreiro', 'carteiro', 'frentista', 'vereador', 'prefeito', 'presidente', 'deputado', 'senador', 'sommelier', 'confeiteiro', 'chef', 'soldado', 'recepcionista', 'gerente', 'artista', 'escultor', 'paleontólogo', 'vigilante', 'pirata', 'DJ', 'decorador', 'embaixador', 'lenhador', 'dançarino', 'pedreiro', 'mestre de obras', 'general', 'vendedor', 'telefonista', 'datilógrafo', 'coveiro', 'açougueiro', 'cineasta', 'árbitro', 'relojoeiro', 'parteira', 'barbeiro', 'delegado', 'xerife', 'estagiário', 'agiota', 'palhaço', 'equilibrista', 'comediante', 'ilusionista', 'maquinista', 'cartomante', 'cowboy'];

let alimentos = ['abacate', 'abacaxi', 'abóbora', 'alface', 'amendoim', 'ameixa', 'arroz', 'azeitona', 'batata', 'banana', 'berinjela', 'beterraba', 'bolacha / biscoito', 'bolo', 'brócolis', 'chocolate', 'caju', 'caqui', 'caviar', 'cebola', 'cenoura', 'cerveja', 'chuchu', 'churros', 'cocada', 'coco', 'coentro', 'couve', 'cuscuz', 'doce de leite', 'leite', 'empada', 'ervilha', 'esfirra', 'macarrão', 'farofa', 'feijão', 'feijoada', 'frango', 'hamburguer', 'hot dog', 'iogurte', 'jabuticaba', 'jaca', 'lagosta', 'camarão', 'laranja', 'lasanha', 'limão', 'linguiça', 'maçã', 'mamão', 'mandioca', 'manga', 'maracujá', 'melancia', 'melão', 'mexerica', 'milho', 'morango', 'mostarda', 'ketchup', 'mousse', 'nhoque', 'nachos', 'omelete', 'orégano', 'ovo', 'panqueca', 'pepino', 'pêra', 'pêssego', 'picles', 'pimenta', 'pimentão', 'pizza', 'pudim', 'queijo', 'quiabo', 'quibe', 'rapadura', 'ravioli', 'refrigerante', 'repolho', 'rocambole', 'rúcula', 'salame', 'salsa', 'salsicha', 'soja', 'sopa', 'sorvete', 'suco', 'tapioca', 'tomate', 'torrada', 'torta', 'trigo', 'trufa', 'uva', 'vinho', 'pinga', 'cachaça', 'kiwi', 'açucar', 'sal', 'manteiga', 'margarina', 'cereja', 'nozes', 'alho', 'atum', 'aveia', 'pão', 'azeite', 'café', 'chá', 'champignon', 'fermento', 'gelatina', 'geleia', 'leite condensado', 'maionese', 'sardinha', 'bacon', 'mortadela', 'presunto', 'espinafre', 'goiaba', 'palmito', 'mirtilo', 'amêndoa', 'aspargo', 'couve-flor', 'cogumelo', 'rabanete', 'abobrinha', 'salmão', 'sardiha', 'quinoa', 'lentilha', 'estrogonofe', 'salada', 'requeijão', 'risoto', 'manjericão', 'batata frita', 'milkshake', 'calabresa', 'bife a parmegiana', 'moqueca', 'croissant', 'bife acebolado', 'churrasco', 'acarajé', 'tucupi', 'ostra', 'molho de tomate', 'farinha de trigo', 'farinha de mandioca', 'polvilho', 'fubá', 'pé de moleque', 'pamonha', 'paçoca', 'canjica', 'brigadeiro', 'arroz doce', 'vaca atolada', 'tutu de feijão', 'pinhão', 'açafrão', 'noz moscada', 'orégano', 'cebolinha', 'gengibre', 'canela', 'alecrim', 'colorau', 'cominho', 'cravo', 'páprica', 'tomilho', 'miojo', 'curry', 'mingau', 'granola', 'linhaça', 'pão de queijo', 'queijo mussarela', 'queijo suiço', 'queijo gorgonzola', 'catupiry', 'cheddar', 'whisky', 'vodka', 'açucar mascavo', 'x-salada', 'beirute', 'pão de alho', 'picanha', 'filé mignon', 'queijo coalho', 'açaí', 'guaraná', 'yakisoba', 'sushi', 'kibe', 'coxinha', 'pastel', 'dendê', 'torresmo', 'damasco', 'figo', 'tamarindo', 'mangaba', 'chiclete', 'bala', 'pirulito', 'picolé', 'pavê', 'goiabada', 'nutela', 'danone'];

let personagens = ['Batman', 'Superman', 'Bruce Wayne', 'Clark Kent', 'Spider-Man', 'Peter Parker', 'Hulk', 'Homem de Ferro', 'Tony Stark', 'Flash', 'Aquaman', 'Capitão América', 'Thor', 'Coringa', 'Indiana Jones', 'James Bond', 'Rocky Balboa', 'Darth Vader', 'Luke Skywalker', 'Han Solo', 'Yoda', 'Chewbacca', 'C3PO', 'R2D2', 'Sherlock Homes', 'Harry Potter', 'Hércules', 'Pica Pau', 'Rapunzel', 'Cinderela', 'Dumbo', 'Mogli', 'Simba', 'Tarzan', 'Wolverine', 'Saci Perere', 'Zorro', 'Mickey Mouse', 'Minnie Mouse', 'Pluto', 'Pato Donald', 'Scooby Doo', 'Pateta', 'Captão Gancho', 'Peter Pan', 'Drácula', 'Lobisomen', 'Pinóquio', 'Homer Simpson', 'Lara Croft', 'Robin Hood', 'Bambi' ,'Mario', 'Sonic', 'A Bela Adormecida', 'Mulher Maravilha', 'Snoopy', 'Woody', 'Buzz Lightyear', 'Shrek', 'Spock', 'Neo', 'Mr. Bean', 'Willy Wonka', 'Chaves', 'Seu Madruga', 'King Kong', 'Godzilla', 'Nemo', 'Freddy Krueger', 'Chuck', 'Alladin', 'Mulher Gato', 'Chapelzinho Vermelho', 'Macgyver', 'Agostinho Carrara', 'Jack Sparrow', 'Robocop', 'Pantera Negra', 'Moana', 'Elsa (Frozen)', 'Dr. Estranho', 'Motoqueiro Fantasma','Aladin', 'Pocahontas', 'Mulan', 'Pikachu', 'Bob Esponja', 'Lula Molusco', 'Goku', 'Optimus Prime', 'Inspetor Clouseau', 'Ethan Hunt', 'Capitão Kirk', 'Naruto', 'Pac-Man', 'John McClane', 'Don Corleone', 'Hannibal Lecter', 'Tim Tim', 'Forrest Gump', 'Princesa Leia', 'Rocky Balboa', 'Obi-Wan Kenobi', 'Marty McFly', 'Gru', 'Gandalf', 'Dominic Toreto', 'Kevin McCalister', 'John Wick', 'Kratos', 'Ace Ventura', 'Barbie', 'Caco Antibes', 'Charlie Brown', 'Mônica (Turma da Mônica)', 'Cebolinha', 'Cascão', 'Magali (Turma da Mônica)', 'Gasparzinho', 'Frodo', 'Nemo', 'Dory (Procurando Nemo)', 'Tio Patinhas', 'Fred Flintstone', 'Dick Vigarista', 'Zé Colmeia', 'Salsicha (Scooby Doo)', 'Hércules', 'Magneto', 'Mike Wazowski', 'Popeye', 'Sheldon Cooper', 'Branca de Neve', 'Frajola', 'Urso Paddington', 'Drácula', 'Chico Bento', 'Dona Florinda', 'Professor Girafales', 'Frankstein', 'papai noel', 'Garfield'];

let biblico = ['Abraão', 'Isaque', 'Jacó', 'José do Egito', 'Adão', 'Eva', 'Caim', 'Abel', 'Enoque', 'Noé', 'Ninrode', 'Ló', 'esposa de Ló', 'Rebeca', 'Raquel', 'Sara', 'Diná', 'Jó', 'Moisés', 'Zípora', 'Arão', 'Josué', 'Calebe', 'Balaão', 'Raabe', 'Jericó', 'Jardim do Éden', 'Sodoma e Gomorra', 'Egito', 'Acã', 'Rute', 'Noemi', 'Ester', 'Mordeicai', 'Gideão', 'Jefté', 'Sansão', 'Samuel', 'Saul', 'Davi', 'Golias', 'Abigail', 'Salomão', 'Absalão', 'Jezabel', 'Elias', 'Eliseu', 'Jonas', 'Ezequias', 'Josias', 'Naamã', 'Jeremias', 'Daniel', 'Nabucodonosor', 'Ciro', 'Neemias', 'Anjo Gabriel', 'Maria', 'Belém', 'Herodes', 'João Batista', 'Pilatos', 'Pedro', 'Mateus', 'Malco', 'Judas Iscariotes', 'Lázaro', 'Timóteo', 'Paulo', 'Êutico', 'Zaqueu', 'Babilônia', 'Zacarias', 'Nazaré', 'batismo', 'templo', 'milagre', 'ressureição', 'Armagedom', 'sinagoga', 'Isaías', 'Ezequiel', 'Salmos', 'Provérbios', 'Eclesiastes', 'Apocalipse', 'Gênesis', 'Lucas', 'José de Arimateia', 'oração', 'Ana', 'Corá', 'Miriã', 'Potifar', 'Jonatã', 'Esaú', 'Geazi', 'Marcos', 'dilúvio', 'Espírito Santo', 'anjos', 'querubins', 'serafins', 'sacrifício', 'Metusalém', 'nefilins', 'Torre de Babel', 'Canaã', 'Judá', 'Levi', 'lepra', 'Jeová', 'Jesus', 'Maná', 'Grande Tribulação', 'Dalila', 'Monte Sinai', 'tabernáculo', 'arca do pacto', 'candelabro', 'resgate', 'trindade', 'paraíso', 'geena', 'Moabe', 'Israel', 'Rio Nilo', 'Rio Jordão', 'Jerusalém', 'Acabe', 'Sadraque', 'Mesaque', 'Abdnego', 'Esdras', 'Assuero', 'Hamã', 'Samaria', 'Marta', 'Jairo', 'Filipe', 'Ebede-Meleque', 'Galileia', 'Herodias', 'Sem', 'Cã', 'Jafé', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Juízes', 'Cântico de Salomão', 'Lamentações', 'Oseias', 'Joel', 'Amós', 'Obadias', 'Miqueias', 'Naum', 'Habacuque', 'Sofonias', 'Ageu', 'Zacarias', 'Malaquias', 'João', 'Atos', 'Romanos', '1 Coríntios', '2 Corintios', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses', 'Tito', 'Filêmon', 'Hebreus', 'Tiago', 'profecia', 'sacerdote', 'Ur', 'adoração', 'Ananias', 'Labão', 'Bíblia', 'Mar Vermelho', 'Os 10 mandamentos', 'Dorcas', 'Nabal', 'Bate-Seba', 'Urias', 'Natã', 'Assíria', 'viuva de Sarefá', 'pacto', 'Ungido'];



//tela inicial, colocar número de times
const inicio = setInterval(() => {
    numTimes = document.querySelector('#quantos-jogadores').value;
    if (numTimes > 1){
        document.querySelector('#ok-inicio').style.display = 'block';
    }
}, 200);

//Função quando clica no botão 'iniciar', e cria a tela de colocar nomes dos times
document.querySelector('#ok-inicio').onclick = function() {
    clearInterval(inicio);
    document.querySelector('#tela-colocar-nomes').style.display = 'block';
    document.querySelector('#tela-inicial').style.display = 'none';

    //clona os campos para nomes de times:
    for (let i=0; i<numTimes; i++) {
        let nomeTime = document.querySelector('#nome-time').cloneNode();
        nomeTime.id = `time-${i+1}`;
        nomeTime.style.display = 'block';
        document.querySelector('#tela-colocar-nomes').insertBefore(nomeTime, document.querySelector('#iniciar-jogo'));
    }

    //verificar se todos os nomes foram preenchidos e cria botão 'iniciar'
    const telaNomes = setInterval(() => {
        let x = 0;
        for (let i = 0; i < numTimes; i++) {
            if (document.querySelector(`#time-${i+1}`).value.length > 2) {
                x++;
            }
        }
        if (x == numTimes) {
            document.querySelector('#iniciar-jogo').style.display = 'block';
            clearInterval(telaNomes);
        }
    }, 200);

};

//Clique no botão 'iniciar' - TELA CATEGORIAS
document.querySelector('#iniciar-jogo').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'block';
    document.querySelector('#tela-colocar-nomes').style.display = 'none';

    //Alimentar array 'times' com os nomes
    for (let i = 0; i < numTimes; i++) {
        let nomeTime = document.querySelector(`#time-${i+1}`).value;
        times.push({nome: nomeTime, pontos:0});
    }
}



function tempoAcabou() {
    document.querySelector('#rodada').style.display = 'none';
    document.querySelector('#revisar-palavras').style.display = 'block';
    for (let i = 0; i < revisarPalavras.length; i++) {
        let itemRevisarPalavras = document.querySelector('#item-revisar-palavras').cloneNode();
        itemRevisarPalavras.innerHTML = revisarPalavras[i].palavra;
        if (revisarPalavras[i].acertou == true) {
            itemRevisarPalavras.style.color = 'lightblue';
        } else {
            itemRevisarPalavras.style.color = 'lightcoral';
        };
        document.querySelector('#revisar-palavras').insertBefore(itemRevisarPalavras, document.querySelector('#proximo-time'));
    };
    numRodadas++

    //QUAL BOTÃO MOSTRAR
    if (numRodadas == 9*numTimes) {
        document.querySelector('#finalizar').style.display = 'block';
    } else if (timeDaVez < numTimes-1){
        document.querySelector('#proximo-time').style.display = 'block';
    }else {
        document.querySelector('#proxima-categoria').style.display = 'block';
        document.querySelector('#finalizar').style.display = 'block';
    }
}

//PRÓXIMO TIME
document.querySelector('#proximo-time').onclick = function() {
    timeDaVez++;
    document.querySelector('#proximo-time').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector(`#${categoriaAtual}`).style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
    document.querySelector('#revisar-palavras').style.display = 'none';

    //limpar revisar-palavras anterior
    for (let i = 0; i < revisarPalavras.length; i++) {
        document.querySelector('#revisar-palavras').children[2].remove();
    }
    revisarPalavras = [];
}

//PRÓXIMA CATEGORIA
document.querySelector('#proxima-categoria').onclick = function() {
    document.querySelector('#proxima-categoria').style.display = 'none';
    document.querySelector('#escolher-categoria').style.display = 'block';
    document.querySelector('#revisar-palavras').style.display = 'none';
    document.querySelector(`#${categoriaAtual}`).style.display = 'none';

    //limpar revisar-palavras anterior e categoria anterior
    for (let i = 0; i < revisarPalavras.length; i++) {
        document.querySelector('#revisar-palavras').children[2].remove();
    }
    revisarPalavras = [];
    categoriaAtual = '';
    timeDaVez = 0;
}

//FINALIZAR
document.querySelector('#finalizar').onclick = function() {
    document.querySelector('#finalizar').style.display = 'none';
    document.querySelector('#revisar-palavras').style.display = 'none';
    times.sort(function (a, b) { return b.pontos - a.pontos });
    for (let i=0; i<numTimes; i++) {
        let itemRanking = document.querySelector('#item-ranking').cloneNode();
        itemRanking.style.display = 'block';
        itemRanking.innerHTML = `${times[i].nome} = ${times[i].pontos} pontos`;
        document.querySelector('#ranking').appendChild(itemRanking);
    }
}


//-------------------ANIMAIS----------------------

//Clique na categoria animais - tela preparar
document.querySelector('#categoria-animais').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-animais').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-animais').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar animais
document.querySelector('#iniciar-rodada-animais').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-animais').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaAnimais()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de animais
function iniciarRodadaAnimais() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraAnimais() {
        let numSorteio = Math.round(Math.random() * animais.length);
        if (numSorteio >= animais.length) {
            numSorteio = animais.length - 1;
        };
        escolhida = animais[numSorteio]
        animais.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraAnimais();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraAnimais();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraAnimais();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------OBJETOS----------------------

//Clique na categoria objetos - tela preparar
document.querySelector('#categoria-objetos').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-objetos').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-objetos').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar objetos
document.querySelector('#iniciar-rodada-objetos').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-objetos').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaObjetos()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de objetos
function iniciarRodadaObjetos() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraObjetos() {
        let numSorteio = Math.round(Math.random() * objetos.length);
        if (numSorteio >= objetos.length) {
            numSorteio = objetos.length - 1;
        };
        escolhida = objetos[numSorteio]
        objetos.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraObjetos();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraObjetos();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraObjetos();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------TV e CINEMA----------------------

//Clique na categoria TVCinema - tela preparar
document.querySelector('#categoria-tv-cinema').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-tv-cinema').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-tv-cinema').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar tv-cinema
document.querySelector('#iniciar-rodada-tv-cinema').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-tv-cinema').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaTVCinema()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de tv-cinema
function iniciarRodadaTVCinema() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraTVCinema() {
        let numSorteio = Math.round(Math.random() * tvCinema.length);
        if (numSorteio >= tvCinema.length) {
            numSorteio = tvCinema.length - 1;
        };
        escolhida = tvCinema[numSorteio]
        tvCinema.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraTVCinema();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraTVCinema();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraTVCinema();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------LUGARES----------------------

//Clique na categoria lugares - tela preparar
document.querySelector('#categoria-lugares').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-lugares').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-lugares').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar lugares
document.querySelector('#iniciar-rodada-lugares').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-lugares').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaLugares()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de lugares
function iniciarRodadaLugares() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraLugares() {
        let numSorteio = Math.round(Math.random() * lugares.length);
        if (numSorteio >= lugares.length) {
            numSorteio = lugares.length - 1;
        };
        escolhida = lugares[numSorteio]
        lugares.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraLugares();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraLugares();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraLugares();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------PESSOAS----------------------

//Clique na categoria pessoas - tela preparar
document.querySelector('#categoria-pessoas').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-pessoas').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-pessoas').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar pessoas
document.querySelector('#iniciar-rodada-pessoas').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-pessoas').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaPessoas()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de pessoas
function iniciarRodadaPessoas() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraPessoas() {
        let numSorteio = Math.round(Math.random() * pessoas.length);
        if (numSorteio >= pessoas.length) {
            numSorteio = pessoas.length - 1;
        };
        escolhida = pessoas[numSorteio]
        pessoas.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraPessoas();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraPessoas();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraPessoas();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------ESPORTES----------------------

//Clique na categoria esportes - tela preparar
document.querySelector('#categoria-esportes').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-esportes').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-esportes').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar esportes
document.querySelector('#iniciar-rodada-esportes').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-esportes').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaEsportes()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de esportes
function iniciarRodadaEsportes() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraEsportes() {
        let numSorteio = Math.round(Math.random() * esportes.length);
        if (numSorteio >= esportes.length) {
            numSorteio = esportes.length - 1;
        };
        escolhida = esportes[numSorteio]
        esportes.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraEsportes();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraEsportes();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraEsportes();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------PROFISSÃO----------------------

//Clique na categoria profissao - tela preparar
document.querySelector('#categoria-profissao').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-profissao').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-profissao').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar profissao
document.querySelector('#iniciar-rodada-profissao').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-profissao').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaProfissao()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de profissao
function iniciarRodadaProfissao() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraProfissao() {
        let numSorteio = Math.round(Math.random() * profissao.length);
        if (numSorteio >= profissao.length) {
            numSorteio = profissao.length - 1;
        };
        escolhida = profissao[numSorteio]
        profissao.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraProfissao();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraProfissao();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraProfissao();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------ALIMENTOS----------------------

//Clique na categoria alimentos - tela preparar
document.querySelector('#categoria-alimentos').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-alimentos').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-alimentos').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar alimentos
document.querySelector('#iniciar-rodada-alimentos').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-alimentos').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaAlimentos()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de alimentos
function iniciarRodadaAlimentos() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraAlimentos() {
        let numSorteio = Math.round(Math.random() * alimentos.length);
        if (numSorteio >= alimentos.length) {
            numSorteio = alimentos.length - 1;
        };
        escolhida = alimentos[numSorteio]
        alimentos.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraAlimentos();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraAlimentos();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraAlimentos();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------PERSONAGENS----------------------

//Clique na categoria personagens - tela preparar
document.querySelector('#categoria-personagens').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-personagens').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-personagens').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar personagens
document.querySelector('#iniciar-rodada-personagens').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-personagens').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaPersonagens()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de personagens
function iniciarRodadaPersonagens() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraPersonagens() {
        let numSorteio = Math.round(Math.random() * personagens.length);
        if (numSorteio >= personagens.length) {
            numSorteio = personagens.length - 1;
        };
        escolhida = personagens[numSorteio]
        personagens.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraPersonagens();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraPersonagens();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraPersonagens();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//-------------------BÍBLICO----------------------

//Clique na categoria biblico - tela preparar
document.querySelector('#categoria-biblico').onclick = function () {
    document.querySelector('#escolher-categoria').style.display = 'none';
    document.querySelector('#categoria-biblico').style.display = 'none';
    document.querySelector('#tela-preparar').style.display = 'block';
    document.querySelector('#iniciar-rodada-biblico').style.display = 'block';
    document.querySelector('#equipe-rodada').innerHTML = times[timeDaVez].nome;
}

//clique começar biblico
document.querySelector('#iniciar-rodada-biblico').onclick = function () {
    categoriaAtual = document.querySelector('#iniciar-rodada-biblico').id;
    document.querySelector('#tela-preparar').style.display = 'none';
    document.querySelector('#tela-contagem-preparar').style.display = 'block';
    //contagem regressiva para começar a rodada
    let telaContagemPreparar = setInterval(function () {
        tempoPreparar--
        document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        if (tempoPreparar == 0) {
            clearInterval(telaContagemPreparar);
            iniciarRodadaBiblico()
            tempoPreparar = 3;
            document.querySelector('#contagem-preparar').innerHTML = tempoPreparar;
        };
    }, 1000);
}

//rodada em si de biblico
function iniciarRodadaBiblico() {
    document.querySelector('#tela-contagem-preparar').style.display = 'none';
    document.querySelector('#rodada').style.display = 'block';
    let escolhida = '';

    function sortearPalavraBiblico() {
        let numSorteio = Math.round(Math.random() * biblico.length);
        if (numSorteio >= biblico.length) {
            numSorteio = biblico.length - 1;
        };
        escolhida = biblico[numSorteio]
        biblico.splice(numSorteio, 1);
        document.querySelector('#palavra-secreta').innerHTML = escolhida
        revisarPalavras.push({ palavra: escolhida, acertou: false });
    }

    sortearPalavraBiblico();

    document.querySelector('#botao-pular').onclick = function () {
        document.querySelector('#pulando').style.display = 'block';
        let pulando = setInterval(function () {
            tempoPulando--;
            if (tempoPulando == 0) {
                clearInterval(pulando);
                tempoPulando = 2;
                document.querySelector('#pulando').style.display = 'none';
            }
        }, 1000)
        revisarPalavras[revisarPalavras.length - 1].acertou = false;
        sortearPalavraBiblico();
    };

    document.querySelector('#botao-certo').onclick = function () {
        times[timeDaVez].pontos++;
        revisarPalavras[revisarPalavras.length - 1].acertou = true;
        sortearPalavraBiblico();
    }

    let contagemRegressivaRodada = setInterval(function () {
        tempoRodada--;
        document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        if (tempoRodada == 0) {
            clearInterval(contagemRegressivaRodada);
            tempoAcabou();
            tempoRodada = tempoDeCadaRodada;
            document.querySelector('#tempo-rodada').innerHTML = tempoRodada;
        };
    }, 1000)
}

//document.querySelector('#tela-preparar').style.display = 'none';
//document.querySelector('#rodada').style.display = 'block';

