import { useQuery } from "@tanstack/react-query";
import { Session } from "../models/session";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Session>(`/sessions`)

const useSession = (id: string) => useQuery({
    queryKey: ['sessions', id],
    queryFn: () => apiClient.getOne(id)
})

export default useSession;