import { useQuery } from "@tanstack/react-query";
import { fetchInsureds } from "../lib/axios";

export function useSerachQuery(query:string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchInsureds(query),
    enabled: !!query,
  });
}
