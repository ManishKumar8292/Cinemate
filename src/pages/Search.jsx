import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from '../hooks/useTitle';
import { Card } from "../component/index";



export const Search = ({ apiPath }) => {

    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = useFetch(apiPath, queryTerm);
    useTitle(`Reasul for ${queryTerm} - Cinemate`);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-900 dark:text-white">{movies.length === 0 ? `No Result Found for the '${queryTerm}'` : `Reasult for '${queryTerm}'`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex flex-start flex-wrap">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}
