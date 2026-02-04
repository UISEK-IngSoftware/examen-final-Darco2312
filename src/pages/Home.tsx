import axios from 'axios';
import { useCallback, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonNote,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonText,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  // parámetros  respuesta de API de Futurama
  interface Character {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
  }

  interface ApiResponse {
    items: Character[];
  }

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // cargar personajes desde API con Axios
  const loadCharacters = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      // HTTP a la API, parametros de 50 pesonajes por
      const response = await axios.get<ApiResponse>(
        'https://futuramaapi.com/api/characters',
        {
          params: {
            orderBy: 'id',
            orderByDirection: 'asc',
            page: 1,
            size: 50
          }
        }
      );

      const items = response.data.items ?? [];
      setCharacters(items);
    } catch {
      setErrorMessage('No se pudo cargar la lista de personajes.');
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useIonViewWillEnter(() => {
    loadCharacters();
  });

  const refresh = async (e: CustomEvent) => {
    await loadCharacters();
    e.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personajes de Futurama -  Daniela Romo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Personajes de Futurama -  Daniela Romo
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonLoading isOpen={isLoading} message="Cargando personajes..."></IonLoading>

        {errorMessage && (
          <IonText color="danger" className="ion-padding">
            {errorMessage}
          </IonText>
        )}

        {!isLoading && !errorMessage && characters.length === 0 && (
          <IonText color="medium" className="ion-padding">
            No hay personajes para mostrar.
          </IonText>
        )}
        
        <IonList>
          {characters.map((character) => (
            <IonItem key={character.id} lines="full">
              <IonAvatar slot="start" style={{ width: '90px', height: '90px' }}>
                <img src={character.image} alt={character.name} />
              </IonAvatar>
              <IonLabel className="ion-text-wrap">
                <h2>{character.name}</h2>
                <p>
                  Género: <IonNote>{character.gender}</IonNote>
                </p>
                <p>
                  Estado vital: <IonNote>{character.status}</IonNote>
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;