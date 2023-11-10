import { useQuery } from "@tanstack/react-query"
import { Session } from "../models/session"
//import { fetchGroups } from "../services/api-client";
import APIClient from "../services/api-client"

const apiClient = new APIClient<Session[]>('/sessions')

const useSessions = () => useQuery({
    queryKey: ['sessions'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000
})

export default useSessions;