const API_BASE_URL = import.meta.env.VITE_API_URL

async function request<T>(endpoint: string, {body, signal}: {body?: any, signal?: AbortSignal} ): Promise<T> {

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    signal,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer testtoken`
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Request failed")
  }

  return response.json() as Promise<T>
}

export default request