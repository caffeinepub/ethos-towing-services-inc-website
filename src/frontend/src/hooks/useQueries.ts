import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { TowingRequest } from '../backend';

export function useGetAllRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<TowingRequest[]>({
    queryKey: ['requests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      location: string;
      vehicleType: string;
      serviceDetails: string;
      dropLocation?: string | null;
    }) => {
      if (!actor) throw new Error('Backend not available');
      
      await actor.submitRequest(
        data.name,
        data.phone,
        data.location,
        data.vehicleType,
        data.serviceDetails,
        data.dropLocation ?? null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['requests'] });
    },
  });
}
