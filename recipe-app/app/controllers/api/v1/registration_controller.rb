module Api::V1
    class RegistrationController < ApplicationController
        def create
            user = User.create!(
                email: params['user']['email'],
                password: params['user']['password'],
                password_confirmation: params['user'][
                    'password_confirmation'
                ]
                username: params['user']['user_name']
            )

            if user
                session[:user_id] = user.id
                render json: {
                    status: :created,
                    user: user
                }
            else 
                render json: {
                    status: 500
                }
            end
        end

        def index
          @registrations = Registration.all
          render json: @registrations
        end
    end
end