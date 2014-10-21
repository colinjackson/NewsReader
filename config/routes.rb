NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end

    resources :users, only: [:create, :show, :new]

    resource :session, only: [:create, :show, :destroy, :new]
  end

  root to: "static_pages#index"
end
