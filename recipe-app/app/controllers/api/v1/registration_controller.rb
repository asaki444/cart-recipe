module Api::V1
    class RegistrationController < ApplicationController
        def create
            user = User.create!(
                email_address: params['email'],
                password: params['password'],
                password_confirmation: params[
                    'password_confirmation'
                ]
                user_name: params['user_name']
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